import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Add timestamp and ID to the lead
    const lead = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...validatedData,
    }
    
    // Save to JSON file
    const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json')
    
    // Ensure data directory exists
    try {
      await fs.mkdir(path.dirname(leadsFilePath), { recursive: true })
    } catch (error) {
      // Directory might already exist
    }
    
    // Read existing leads or create empty array
    let leads = []
    try {
      const existingData = await fs.readFile(leadsFilePath, 'utf-8')
      leads = JSON.parse(existingData)
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }
    
    // Add new lead
    leads.push(lead)
    
    // Write back to file
    await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2))
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error submitting your message. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}