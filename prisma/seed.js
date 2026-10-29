const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding ICC Database with Full Executive Council (including Lawrence Ochu & Anderson Ikea)...');

  // Clean existing records
  await prisma.rsvp.deleteMany();
  await prisma.event.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.duesSubscription.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.user.deleteMany();
  await prisma.household.deleteMany();

  const defaultPassword = await hash('Igbobuofu2012', 10);

  // ─── 1. Households ──────────────────────────────────────────────
  const onuchukwuHousehold = await prisma.household.create({
    data: {
      name: 'Onuchukwu Household',
      addressLine1: '32 Mugga Way',
      city: 'Red Hill',
      state: 'ACT',
      postalCode: '2603',
      country: 'Australia',
    },
  });

  const nwosuHousehold = await prisma.household.create({
    data: {
      name: 'Nwosu Household',
      addressLine1: '18 Hobart Avenue',
      city: 'Forrest',
      state: 'ACT',
      postalCode: '2603',
      country: 'Australia',
    },
  });

  const orisakweHousehold = await prisma.household.create({
    data: {
      name: 'Orisakwe Household',
      addressLine1: '45 Captain Cook Crescent',
      city: 'Griffith',
      state: 'ACT',
      postalCode: '2603',
      country: 'Australia',
    },
  });

  const njokuHousehold = await prisma.household.create({
    data: {
      name: 'Njoku Household',
      addressLine1: '12 National Circuit',
      city: 'Barton',
      state: 'ACT',
      postalCode: '2600',
      country: 'Australia',
    },
  });

  const ochuHousehold = await prisma.household.create({
    data: {
      name: 'Ochu Household',
      addressLine1: '28 Empire Circuit',
      city: 'Forrest',
      state: 'ACT',
      postalCode: '2603',
      country: 'Australia',
    },
  });

  const ikeaHousehold = await prisma.household.create({
    data: {
      name: 'Ikea Household',
      addressLine1: '19 Canberra Avenue',
      city: 'Kingston',
      state: 'ACT',
      postalCode: '2604',
      country: 'Australia',
    },
  });

  const iloelunachiHousehold = await prisma.household.create({
    data: {
      name: 'Iloelunachi Household',
      addressLine1: '5 Dominion Circuit',
      city: 'Deakin',
      state: 'ACT',
      postalCode: '2600',
      country: 'Australia',
    },
  });

  const nsirimHousehold = await prisma.household.create({
    data: {
      name: 'Nsirim Household',
      addressLine1: '8 Telopea Park',
      city: 'Kingston',
      state: 'ACT',
      postalCode: '2604',
      country: 'Australia',
    },
  });

  const ezeHousehold = await prisma.household.create({
    data: {
      name: 'Eze Household',
      addressLine1: '25 Constitution Avenue',
      city: 'Campbell',
      state: 'ACT',
      postalCode: '2612',
      country: 'Australia',
    },
  });

  const okaforHousehold = await prisma.household.create({
    data: {
      name: 'Okafor Household',
      addressLine1: '14 Commonwealth Avenue',
      city: 'Yarralumla',
      state: 'ACT',
      postalCode: '2600',
      country: 'Australia',
    },
  });

  const adelekeHousehold = await prisma.household.create({
    data: {
      name: 'Adeleke Household',
      addressLine1: '7 State Circle',
      city: 'Deakin',
      state: 'ACT',
      postalCode: '2600',
      country: 'Australia',
    },
  });

  // ─── 2. Executive Council (EXCO) ────────────────────────────────
  // President
  const president = await prisma.user.create({
    data: {
      email: 'ifeanyi.onuchukwu@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Chief Ifeanyi',
      lastName: 'Onuchukwu',
      role: 'super_admin',
      phoneNumber: '0412 111 222',
      isEmailVerified: true,
      householdId: onuchukwuHousehold.id,
    },
  });

  // Vice-President
  const vp = await prisma.user.create({
    data: {
      email: 'joseph.nwosu@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Joseph',
      lastName: 'Nwosu',
      role: 'super_admin',
      phoneNumber: '0423 222 333',
      isEmailVerified: true,
      householdId: nwosuHousehold.id,
    },
  });

  // President, Ezinwanyi (Women's Wing)
  const womenPresident = await prisma.user.create({
    data: {
      email: 'nonye.orisakwe@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Nonye',
      lastName: 'Orisakwe',
      role: 'super_admin',
      phoneNumber: '0434 333 444',
      isEmailVerified: true,
      householdId: orisakweHousehold.id,
    },
  });

  // Treasurer (Doris Njoku)
  const womenVp = await prisma.user.create({
    data: {
      email: 'doris.njoku@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Doris',
      lastName: 'Njoku',
      role: 'treasurer',
      phoneNumber: '0445 444 555',
      isEmailVerified: true,
      householdId: njokuHousehold.id,
    },
  });

  // Social Secretary (Lawrence Ochu)
  const socialSec = await prisma.user.create({
    data: {
      email: 'lawrence.ochu@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Lawrence',
      lastName: 'Ochu',
      role: 'super_admin',
      phoneNumber: '0415 678 123',
      isEmailVerified: true,
      householdId: ochuHousehold.id,
    },
  });

  // Assistant Treasurer (Anderson Ikea)
  const treasurer = await prisma.user.create({
    data: {
      email: 'anderson.ikea@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Anderson',
      lastName: 'Ikea',
      role: 'super_admin',
      phoneNumber: '0418 890 234',
      isEmailVerified: true,
      householdId: ikeaHousehold.id,
    },
  });

  // Assistant Secretary (Chibueze Iloelunachi)
  const assistantSec = await prisma.user.create({
    data: {
      email: 'chibueze.iloelunachi@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Chibueze',
      lastName: 'Iloelunachi',
      role: 'super_admin',
      phoneNumber: '0421 345 567',
      isEmailVerified: true,
      householdId: iloelunachiHousehold.id,
    },
  });

  // Provost (Protocol & Order)
  const provost = await prisma.user.create({
    data: {
      email: 'chidi.nsirim@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Chidi',
      lastName: 'Nsirim',
      role: 'super_admin',
      phoneNumber: '0456 555 666',
      isEmailVerified: true,
      householdId: nsirimHousehold.id,
    },
  });

  // Secretariat System Admin
  await prisma.user.create({
    data: {
      email: 'admin@icc.org.au',
      passwordHash: defaultPassword,
      firstName: 'Secretariat',
      lastName: 'Admin',
      role: 'super_admin',
      phoneNumber: '0400 000 000',
      isEmailVerified: true,
    },
  });

  // ─── 3. Member Families ─────────────────────────────────────────
  const obinna = await prisma.user.create({
    data: {
      email: 'obinna@example.com',
      passwordHash: defaultPassword,
      firstName: 'Obinna',
      lastName: 'Okafor',
      role: 'family_admin',
      phoneNumber: '0412 345 678',
      isEmailVerified: true,
      householdId: okaforHousehold.id,
    },
  });

  await prisma.user.create({
    data: {
      email: 'ngozi@example.com',
      passwordHash: defaultPassword,
      firstName: 'Ngozi',
      lastName: 'Okafor',
      role: 'member',
      phoneNumber: '0423 456 789',
      isEmailVerified: true,
      householdId: okaforHousehold.id,
    },
  });

  await prisma.user.create({
    data: {
      email: 'amaka.adeleke@example.com',
      passwordHash: defaultPassword,
      firstName: 'Amaka',
      lastName: 'Adeleke',
      role: 'family_admin',
      phoneNumber: '0478 888 999',
      isEmailVerified: true,
      householdId: adelekeHousehold.id,
    },
  });

  // ─── 4. Dues Subscriptions ──────────────────────────────────────
  const householdsWithDues = [
    { household: onuchukwuHousehold, user: president },
    { household: nwosuHousehold, user: vp },
    { household: orisakweHousehold, user: womenPresident },
    { household: njokuHousehold, user: womenVp },
    { household: ochuHousehold, user: socialSec },
    { household: ikeaHousehold, user: treasurer },
    { household: iloelunachiHousehold, user: assistantSec },
    { household: nsirimHousehold, user: provost },
    { household: okaforHousehold, user: obinna },
  ];

  for (const item of householdsWithDues) {
    await prisma.duesSubscription.create({
      data: {
        householdId: item.household.id,
        userId: item.user.id,
        planType: 'annual',
        amount: 120.00,
        status: 'active',
        nextBillingDate: new Date('2026-11-01'),
      },
    });

    await prisma.payment.create({
      data: {
        householdId: item.household.id,
        userId: item.user.id,
        amount: 120.00,
        paymentMethod: 'stripe',
        status: 'completed',
        description: 'Annual Family Membership Dues (2026/2027)',
        paidAt: new Date('2026-02-10'),
      },
    });
  }

  // ─── 5. Canberra Community Events ───────────────────────────────
  const yamFestival = await prisma.event.create({
    data: {
      title: 'New Yam Festival (Iri Ji 2026)',
      description: 'Annual cultural celebration of harvest, music, and community fellowship.',
      eventDate: new Date('2026-11-15T10:00:00Z'),
      location: 'Canberra Community Hall, ACT',
      capacityLimit: 300,
      fee: 0.00,
      createdById: president.id,
    },
  });

  const languageClass = await prisma.event.create({
    data: {
      title: 'Igbo Language & Culture Immersion',
      description: 'Interactive cultural and language classes for youth and families.',
      eventDate: new Date('2026-12-05T14:00:00Z'),
      location: 'ACT Public Library, Civic',
      capacityLimit: 50,
      fee: 15.00,
      createdById: womenPresident.id,
    },
  });

  const galaDinner = await prisma.event.create({
    data: {
      title: 'End of Year Annual Gala Dinner',
      description: 'Celebrate our year with dinner, award ceremonies, and traditional dancing.',
      eventDate: new Date('2026-12-19T18:00:00Z'),
      location: 'National Convention Centre Canberra',
      capacityLimit: 250,
      fee: 65.00,
      createdById: president.id,
    },
  });

  // RSVPs
  await prisma.rsvp.create({
    data: {
      eventId: yamFestival.id,
      userId: president.id,
      rsvpStatus: 'yes',
    },
  });

  await prisma.rsvp.create({
    data: {
      eventId: yamFestival.id,
      userId: obinna.id,
      rsvpStatus: 'yes',
    },
  });

  console.log('Seeding completed successfully with Lawrence Ochu and Anderson Ikea!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
