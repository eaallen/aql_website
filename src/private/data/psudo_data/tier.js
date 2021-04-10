const tiers = [
    {
        title: 'Demo',
        price: '0',
        currency:'usd',
        description: [
            'connection to demo database',
            'query up to 100 rows',
            'Tutorial video',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        href: 'https://appsource.microsoft.com/en-us/product/office/wa200001383?tab=overview'
    },
    {
        title: 'The Self Learner',
        featured: true,
        subheader: 'Most popular',
        price: '25',
        currency:'usd',
        description: [
            '20 SQL lesson',
            '100+ practice problems',
            'Instant Feedback',
            '50 Excel examples',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
        href: '/pay'
    },
    {
        title: 'University',
        price: '10,000',
        currency:'usd',
        rate: 'semester',
        description: [
            'Register 500 students per account',
            'Priority email support',
            'Help center access',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
        href: 'https://www.linkedin.com/in/elijah-andrew-allen/'

    },
];

export default tiers
