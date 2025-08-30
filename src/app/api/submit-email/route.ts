/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = ""; // your slack webhook api url

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, source } = body;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate name (required for contact form)
    if (source === "contact" && !name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Validate phone (required for contact form)
    if (source === "contact" && !phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Basic phone validation (should start with +91 and have 10 digits after)
    if (source === "contact") {
      const phoneRegex = /^\+91\s?\d{10}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, " "))) {
        return NextResponse.json(
          { error: "Please enter a valid phone number with +91" },
          { status: 400 }
        );
      }
    }

    // Format timestamp for Indian timezone
    const now = new Date();
    const indianTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
    const timestamp = indianTime.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Prepare Slack message
    const sourceText = source === "contact" ? "Contact Page" : "Home Page";
    const slackMessage = {
      text: `New ${sourceText} Submission from OceanFlo Website`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `📧 New ${sourceText} Submission`,
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name || "Not provided"}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Phone:*\n${phone || "Not provided"}`,
            },
            {
              type: "mrkdwn",
              text: `*Source:*\n${sourceText}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Timestamp:*\n${timestamp} (IST)`,
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "💧 OceanFlo Contact Management System",
            },
          ],
        },
      ],
    };

    // Send to Slack webhook
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error("Slack webhook failed:", errorText);
      return NextResponse.json(
        { error: "Failed to send contact information to Slack" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Contact information submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
