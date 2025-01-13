const localQuotes = [
	{
		content:
			'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		content: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		content: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		content: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		content: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		content: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		content: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		content: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		content: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		content: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		content: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		content: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		content: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		content: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		content: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		content: 'Today is the tomorrow we worried about yesterday.',
		author: null,
	},
	{
		content: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		content: 'Every man dies. Not every man really lives.',
		author: null,
	},
	{
		content: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		content: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		content: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		content: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		content: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		content: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		content: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		content: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		content: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		content: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		content: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		content: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		content: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		content: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		content: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		content: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		content: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		content: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		content: 'From small beginnings come great things.',
		author: null,
	},
	{
		content: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		content: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		content: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		content: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		content: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		content: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		content: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		content: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		content: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		content: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		content: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		content: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		content: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		content: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		content: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		content: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		content: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		content: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		content: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		content: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		content: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		content: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		content: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		content: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		content: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		content: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		content: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		content:
			'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		content: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		content:
			'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		content: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		content: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		content: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		content: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		content: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		content: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		content: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		content: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		content: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		content: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		content: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		content:
			'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		content: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		content: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		content: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		content: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		content: 'It takes both sunshine and rain to make a rainbow.',
		author: null,
	},
	{
		content: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		content: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		content: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		content: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		content: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		content: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		content: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		content: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		content: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		content: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		content: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		content: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		content: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		content: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		content: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		content: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		content: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		content: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		content: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		content: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		content: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		content: 'We do what we do because we believe.',
		author: null,
	},
	{
		content: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		content: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		content: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		content: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		content: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		content: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		content: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		content: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		content: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		content: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		content: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		content: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		content: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		content: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		content: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		content: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		content: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		content: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		content: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		content: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		content: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		content: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		content: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		content: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		content: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		content: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		content: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		content: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		content: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		content: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		content: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		content: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
];
