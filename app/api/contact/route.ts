import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, contactNumber, email, message } = body

    // Validate required fields
    if (!fullName || !contactNumber || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1417812705972191232/dUi7cEJPNFZTSBD4NEq7r8CzkFtFCd5G3s87BVvKYXXdHcomHkcgrZ58t4Y1ji7v2mdJ"

    // Prepare Discord message
    const discordMessage = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0x000000, // Changed to black color for black/white theme
          fields: [
            {
              name: "Full Name",
              value: fullName,
              inline: true,
            },
            {
              name: "Contact Number",
              value: contactNumber,
              inline: true,
            },
            {
              name: "Email",
              value: email,
              inline: false,
            },
            {
              name: "Message",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error("Failed to send to Discord")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
