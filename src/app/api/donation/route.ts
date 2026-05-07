import { NextResponse } from 'next/server';

// Mock database (Note: In Vercel serverless functions, this will reset frequently)
let donationData = {
  currentAmount: 0,
  goalAmount: 17000
};

export async function GET() {
  return NextResponse.json(donationData);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (typeof data.currentAmount === 'number') {
      donationData.currentAmount = data.currentAmount;
    }
    
    if (typeof data.goalAmount === 'number') {
      donationData.goalAmount = data.goalAmount;
    }

    return NextResponse.json({ success: true, data: donationData });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 });
  }
}
