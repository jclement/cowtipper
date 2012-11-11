jQuery(function() {

  credits = [
    '"Artist seeks Boss with vision impairment."',
    '"Daddy, what does FORMATTING DRIVE C: mean?"',
    '2 rules to success in life: 1. Don\'t tell people everything you know.',
    'Amoebit:  Amoeba/rabbit cross; it can multiply and divide at the same time.',
    'All I ask is to prove that money can\'t make me happy.',
    'Borg virus detected. (A)ssimilate? (Y/y)',
    'Borg-Cola: Not the choice of the next generation.',
    'Borgasm: The ecstacy of being assimilated.',
    'Borger King. Have it our way. Your way is irrelevant.',
    'Boycott shampoo. Demand real poo.',
    'California raisins murdered! Cereal killer suspected.',
    'Commit suicide. A hundred thousand lemmings can\'t be wrong.',
    'Confucius say too much.  -- recent Chinese proverb',
    '"Artist seeks Boss with vision impairment."',
    '"Beam me aboard, Scotty!" "Will a 2X4 do, Captain?"',
    '"Happiness is a warm puppy", said the anaconda.',
    '*tap* *tap* *tap* Is this thing on?',
    'A Shower is the halfway point between Bed and World.',
    'A flying saucer results when a nudist spills his coffee.',
    'A penny for your thoughts; $20 to act them out.',
    'A closed mouth gathers no foot.',
    'A hangover:  the wrath of grapes.',
    'A professor is one who talks in someone else\'s sleep.',
    'A bird in the hand makes it hard to blow your nose.',
    'A good pun is its own reword.',
    'A good hot dog feeds the hand that bites it.',
    'A belly button is for salt when you eat celery in bed. ',
    'A mistress lies between a mister and a mattress.',
    'A self-adressed envelope would be addressed "Envelope".',
    'A)bort R)etry I)nfluence with large hammer?',
    'Ability is a good thing but stability is even better.',
    'Actual TorStar headline, 3/6/94: "Man charged with murder after death"',
    'Actual newspaper headline: "TEENAGE PROSTITUTES SPREADING NATIONWIDE"',
    'Actual newspaper headline, 1/17/77: "Cold Wave Linked to Temperatures"',
    'Actual newspaper headline, 8/14/80: "Food Basic to Student Diet"',
    'After silence, music comes closest to expressing the inexpressible.',
    'After all is said and done, usually more is said.',
    'Air is water with holes in it.',
    'Air travel:  Breakfast in London, dinner in New York, luggage in Brazil.',
    'Alcoholic:  Someone you don\'t like who drinks as much as you do.',
    'All things are possible, except skiing through a revolving door.',
    'All wiyht.  Rho sritched mg kegtops awound?',
    'All I ask is to prove that money can\'t make me happy.',
    'Amoebit:  Amoeba/rabbit cross; it can multiply and divide at the same time.',
    'Animals/people: you can pet 99% of animals and still get a G rating.',
    'Any man who can see through women is sure missing a lot.',
    'Any student who changes the course of history is probably writing an exam.',
    'Anyone who makes an absolute statement is a fool.',
    'Apathy Error:  Don\'t bother striking any key.',
    'Are dog biscuits made from collie flour?',
    'As they say in Beirut, Shiite happens.',
    'Bachelor:  A guy who is footloose and fiancee-free.',
    'Backup not found: A)bort, R)etry, M)assive heart failure?',
    'Backups?  We doan *NEED* no steenking baX%^~,VbKx NO CARRIER',
    'Bad command or file name.  Go stand in the corner.',
    'Banectomy:  The removal of bruises on a banana.  -- Rich Hall',
    'Behaviorism is the art of pulling habits out of rats.  -- O\'Neill',
    'Being popular is important.  Otherwise people might not like you.',
    'Being psychotic is all it\'s cracked up to be.',
    'Best diet: Eat as much as you want, but don\'t swallow it.',
    'Bitchenaid: It\'s like, totally, the best dishwasher ever, dude!',
    'Blessed are the censors; they shall inhibit the earth.',
    'Boy:  A noise with dirt on it.',
    'Boys will be boys, and so will a lot of middle-aged men.',
    'Budget: A method for going broke methodically.',
    'Bull behind a tapestry: you can\'t see the taurus for the frieze.',
    'Bulldozer: a student sleeping through a lecture.',
    'Bureaucrat, n.: A person who cuts red tape sideways.',
    'Buy one, get one free...does it have to be in that order?',
    'Cabinicreep:  When closing one kitchen cabinet causes another to open.',
    'Can you think of another word for "synonym"?',
    'Canada has two seasons. Winter and Construction.',
    'Canada: 51 weeks winter, one week hockeyless summer.',
    'Cats took many thousands of years to domesticate humans.',
    'Choconiverous:  Biting off the head of the chocolate Easter bunny first.',
    'Cinemuck:  Popcorn, soda, and candy that covers the floors of movie theaters.',
    'Circle:  A line that meets its other end without ending.',
    'Cleanliness is next to clean-limbed, in the dictionary.',
    'Click...click...click...damn, out of new taglines.',
    'Cloning is the sincerest form of flattery.',
    'Close your eyes and press escape three times.',
    'Cole\'s Law: Thinly sliced cabbage.',
    'College:  The fountains of knowledge, where everyone goes to drink.',
    'Commit suicide. A hundred thousand lemmings can\'t be wrong.',
    'Committee:  The unwilling, selected from the unfit, to do the unnecessary.',
    'Confucius say too much.  -- recent Chinese proverb',
    'Conscience is what hurts when everything else feels good.',
    'Consider what might be fertilizing the greener grass across the fence.',
    'Death is the one experience that we cannot put in perspective afterwards.',
    'Death and taxes are inevitable; at least death doesn\'t get worse every year.',
    'Defeat is worse than death because you have to live with defeat.',
    'Democracy is where you can say what you think even if you don\'t think.',
    'Democracy is the worship of Jackals by Jackasses.  -- H. L. Mencken',
    'Despite the high cost of living, it remains popular.',
    'dfghkjupih uiph12...ooops...sorry...fell asleep on the keyboard.',
    'Did you expect mere proof to sway my opinion?',
    'Diplomacy:  Saying "go to hell" such that they look forward to the trip.',
    'Do infants have as much fun in infancy as adults do in adultery?',
    'Do steam rollers really roll steam?',
    'Does Time pass? Yes, it does. How else can you explain Visa bills?',
    'Does the name "Pavlov" ring a bell?',
    'Don\'t anthropomorphize computers. They don\'t like it.',
    'Don\'t laugh. It could happen.',
    'Don\'t judge a book by its mini-series.',
    'Don\'t use no double negatives, not never.',
    'Don\'t sweat the petty things, just pet the sweaty things.',
    'Don\'t you hate it when life doesn\'t follow the manuals?',
    'Don\'t drive me crazy -- it\'s within walking distance.',
    'Don\'t explain. Your friends know already and your enemies don\'t care.',
    'Don\'t hit the keys so hard, it hurts.',
    'Don\'t undertake vast projects with half-vast ideas.',
    'Don\'t get stuck in a closet; wear yourself out.',
    'Down with categorical imperatives.',
    'Drunk Borg: Rsilience in floor tile. Wan\'be similated?',
    'Due to a mixup in Urology, orange juice will not be served this morning.',
    'Earth was interesting, and worth the money I paid for it.',
    'Egotism:  Doing a crossword puzzle with a pen.',
    'Eighty percent of all people consider themselves to be above average drivers.',
    'Either I\'m dead or my watch has stopped.  -- last words of Groucho Marx',
    'Either that wallpaper goes, or I do.  -- last words of Oscar Wilde',
    'Elbonics:  Two people maneuvering for one armrest in a movie theater.',
    'Electricity comes from electrons; morality comes from morons.',
    'Eleven tons of hair stolen. Police combing area.',
    'Emulate your heros, but don\'t carry it too far.  Especially if they are dead.',
    'Ever find yourself posting messages just to show off your taglines?',
    'Every silver lining has a cloud around it.',
    'Every pool you can swim in has been pissed in at least once.',
    'Every journalist has a novel in him, which is an excellent place for it.',
    'Everyone else my age is an adult, whereas I am merely in disguise.  -- Atwood',
    'Everything in moderation, including moderation.',
    'Experience is what you get when you were expecting something else.',
    'Experiments should be reproducible.  They should all fail the same way.',
    'Expert:  Avoids the small errors while sweeping on to the grand fallacy.',
    'Fact: 3 out of 5 people aren\'t the other 2.',
    'Familiarity breeds children.',
    'Fashion:  A form of ugliness so intolerable that it changes every six months.',
    'Fast, Cheap, Good:  Choose any two.',
    'Fenderberg: Deposit on the inside of a car fender after a snowstorm.',
    'Flopcorn:  The unpopped kernels at the bottom of the cooker.',
    'Fools rush in -- and get the best seats in the house.',
    'For those who like this sort of thing, this is the sort of thing they like.',
    'For reply, send self-abused stomped antelope to: brea9430@mach1.wlu.ca',
    'Fossil flowers come from the Petrified Florist.',
    'Funny, these cookies don\'t taste anything like Girl Scouts.',
    'Gather round like cattle and ye shall be herd.',
    'Genderplex: Trying to determine from the cutesy pictures which restroom to use.',
    'Generally you don\'t see that kind of behavior in a major appliance',
    'Genetics: proof that God gambles. Clinton: proof He lost.',
    'Genetics:  Why you look like your father, or if you don\'t, why you should.',
    'Gentlemen: it appears to be unanimous that we can not agree.',
    'Gentleman:  Knows how to play the bagpipes, but doesn\'t.',
    'Get your mind outta the gutter! And pick mine up while you\'re down there.',
    'Give me a lever long enough, and a place to stand, and I\'ll break my lever.',
    'Give me chastity and continence, but not just now.  -- St. Augustine',
    'Give a skeptic an inch and he\'ll measure it.',
    'Gleemites:  Petrified deposits of toothpaste found in sinks.',
    'God gives burdens; also shoulders.',
    'God is REAL, unless explicitly declared INTEGER.',
    'God gives us relatives; thank goodness we can choose our friends.',
    'GO HABS GO! And take the rest of the province with you.',
    'Good judgement comes from experience. Experience comes from bad judgement.',
    'Good sopranos and tenors have resonance -- where others have brains.',
    'Grasshoppotamus:  A creature that can leap to tremendous heights...  once.',
    'Great minds run in great circles.',
    'Gretzky hasn\'t scored near as often as that Japanese player, Hee Shu Tze.',
    'Had there been an actual emergency, you would no longer be here.',
    'Happiness can\'t buy you money.',
    'Hard work never killed anybody, but why take a chance?',
    'hAS aNYONE sEEN mY cAPSLOCK kEY?',
    'Have you flogged your crew today?',
    'Have you seen Quasimodo? I\'ve a hunch he\'s back.',
    'Have an adequate day.',
    'Having children is like having a bowling alley installed in your brain.',
    'Having children will turn you into your parents.',
    'He was so narrow-minded he could see through a keyhole with both eyes.',
    'He who dies with the most taglines, wins!',
    'He who dies with the most toys is nonetheless dead.',
    'He who laughs last didn\'t get the joke.',
    'He has the heart of a little child...  it\'s in a jar on his desk.',
    'He is no lawyer who cannot take seventeen sides.',
    'Health is merely the slowest possible rate at which one can die.',
    'Hearsay:  What toddlers do when anyone mutters a dirty word.',
    'Heating with wood, you get warm twice:  Once chopping it, and once stacking it.',
    'Heisenberg might have been here.',
    'HELP!  MY TYPEWRITER IS BROKEN!  -- E. E. CUMMINGS',
    'Hey Santa, how much is it for the list of naughty girls?',
    'Hindsight is usually better...depending on the hind you\'ve sighted.',
    'History does not repeat itself; historians merely repeat each other.',
    'Honesty is the best policy, but insanity is a better defense.',
    'Honeymoon:  A short period of doting between dating and debting.  -- Ray Bandy',
    'Honk if you love peace and quiet.',
    'Horse sense is the thing a horse has that keeps it from betting on people.',
    'Hospitality:  Making your guests feel at home, even though you wish they were.',
    'How long is a minute depends on which side of the bathroom door you are on.',
    'How come wrong numbers are never busy?',
    'How many priests are needed in Boston Mass?',
    'How many weeks are there in a light year?',
    'How do they get all those little metal bits on a zipper to line up so well?',
    'How wonderful opera would be if there were no singers.',
    'I always cry during sex. I think it\'s the Mace.',
    'I have had a perfectly wonderful evening.  But this wasn\'t it.  -- Groucho Marx',
    'I married Miss Right. I didn\'t know her first name was Always.',
    'I know I have a purpose because I always seem to need deodorant.',
    'I am Al of Borg. Aww, Peg, I assimilated you last year.',
    'I am Sajak of Borg. R__I_T_NC_ I_ FU_IL_',
    'I am NOT a pornographer. I don\'t even own a pornograph.',
    'I disclaim my disclaimer!',
    'I believe in free will. My religion says I have no choice.',
    'I can\'t give you brains, but I can give you a diploma. (the Wizard of Oz)',
    'I distinctly remember forgetting that.',
    'I will meet you at the corner of Walk and Don\'t Walk.',
    'I do a lot of thinking in the john. Says a lot for my thoughts.',
    'I am Tweety of Borg. I _tawt_ I attimiwated a puddy tat!',
    'I worked myself up from nothing to a state of extreme poverty.  -- Groucho Marx',
    'I am Clinton of Borg. Hillary says resistance is futile!',
    'I got a life! I ordered it through my computer.',
    'I came, I saw, I deleted all your files.',
    'I dreamed I met God. He sneezed, and I didn\'t know what to say to Him.',
    'I have not seen as far as others because giants were standing on my shoulders.',
    'I have read and understood the above. X________________________',
    'I know everything. I just can\'t remember it all at once.',
    'I never forget a face, but in your case I\'ll make an exception.  -- Marx',
    'I locked my coathanger in the car. Good thing I had a key.',
    'I would like to help you out.  Which way did you come in?',
    'I just wish my mouth had a backspace key.',
    'I dreamed I was a muffler. I woke up exhausted.',
    'I am a creationist; I refuse to believe that I could have evolved from humans.',
    'I repeatedly and sincerely asked that I be born again. My mother refused.',
    'I could not possibly fail to disagree with you less.',
    'I wired my dryer backwards. Now it spits out extra socks.',
    'I bet you have never seen a plumber bite his nails.',
    'I am Fudd of Borg. Wesistance is usewess!',
    'I like work; it fascinates me.  I can sit and look at it for hours.',
    'I am McMahon of Borg. You may already be assimilated.',
    'I think that I shall never see a billboard lovely as a tree.  -- Nash',
    'I would like to lick apricot brandy out of your navel.  -- Cerebus',
    'I dreamed I was a wheel rim. I woke up still tired.',
    'I\'m not a vegetarian because I love animals...I just hate PLANTS!',
    'I never made a mistake in my life.  I thought I did once, but I was wrong.',
    'I am prepared for all emergencies but totally unprepared for everyday life.',
    'I used to be lost in the shuffle.  Now I just shuffle along with the lost.',
    'I am Ginsu of Borg. You will be assimilated - but WAIT! There\'s MORE!',
    'I want to die in my sleep like my father, not screaming like his passengers.',
    'I have seen the future and it is just like the present, only longer.  -- Albran',
    'I think sex is better than logic, but I can\'t prove it.',
    'I will always love the false image I had of you.',
    'I went to the Net and all I got was this stupid tagline.',
    'I seem to be a verb.  -- Buckminster Fuller',
    'I hate laundry month.',
    'I doubt, therefore I might be.',
    'I am Homer of Borg! Prepare to be... OOooooo! Donuts!',
    'I used to be sane. I got better.',
    'I would give my right arm to be ambidextrous.',
    'I was glad to be able to answer promptly. I said I didn\'t know. --Mark Twain',
    'I may not be the world\'s greatest lover, but number seven\'s not bad.  -- Allen',
    'I\'m an atheist! I swear to God I am!',
    'I\'ll have: two drugged brains over easy with bacon and toast.',
    'I\'ll race you to China.  You can have a head start.  Ready, set, GO!',
    'I\'ll procrastinate...tomorrow.',
    'I\'m in shape. Round is a shape, isn\'t it?',
    'I\'m not under the alkafluence of inkahol that some thinkle peep I am.',
    'If God had meant for us to be naked, we would have been born that way.',
    'If today is the first day of the rest of your life, what was yesterday?',
    'If You Pass This Point You Will Most Certainly Die.  -- sign on birth canal',
    'If at first you don\'t succeed, quit; don\'t be a nut about success.',
    'If you can\'t dazzle \'em with brilliance, baffle \'em with bullshit.',
    'If you think before you speak, the other guy gets his joke in first.',
    'If there is no God, who pops up the next Kleenex?  -- Art Hoppe',
    'If you can read this, my cloaking device is on the fritz.',
    'If you lay every snoring student end-to-end, they\'d be more comfortable.',
    'If it wasn\'t for muscle spasms, I wouldn\'t get any exercise at all.',
    'If you can\'t say anything nice, you probably don\'t have many friends.',
    'If either religion or science were infallible, it would incorporate the other.',
    'If you can\'t find your glasses, it\'s probably because you don\'t have them on.',
    'If I had finished this sentence.  -- Hofstadter',
    'If you are horny, it\'s lust, but if your partner\'s horny, it\'s affection.',
    'If it were truly the thought that counted, more women would be pregnant.',
    'If it wasn\'t for lawyers, we wouldn\'t need them.',
    'If all the world\'s a stage, who sprung the trap door on me?',
    'If flattery gets you nowhere, try bribery.',
    'If it wasn\'t for Newton, we wouldn\'t have to eat bruised apples.',
    'If in doubt, mumble.',
    'If at first you do succeed, try to hide your astonishment.',
    'If at first you don\'t succeed, destroy all evidence that you tried.',
    'If laws were outlawed, only outlaws would be lawyers.',
    'If a straight line fit is required, obtain only two data points.',
    'If you shoot a mime, do you use a silencer?',
    'If you can\'t be replaced, you can\'t be promoted.',
    'If all the world\'s managers were laid end to end, it would be an improvement.',
    'If at first you don\'t succeed, redefine success.',
    'If your parents didn\'t have any children, neither will you.',
    'If morons could fly, the sky would be pitch black.',
    'If there is light at the end of the tunnel...  ORDER MORE TUNNEL.',
    'If at first you don\'t succeed, you probably didn\'t really care anyway.',
    'If ignorance is bliss, why aren\'t there more happy people?',
    'If time heals all wounds, how come bellybuttons don\'t fill in?',
    'If you were to ask me this question, what would my answer be?',
    'If nothing beats getting drunk, given a choice, I\'d take the nothing.',
    'Illegitimus non Carborundem -- "Don\'t let the bastards grind you down".',
    'Illiterate?  Write for free help.',
    'In English, every word can be verbed.',
    'In order to get a loan you must first prove you don\'t need it.',
    'In 1869 the waffle iron was invented for people who had wrinkled waffles.',
    'In theory there is no difference between theory and practice.',
    'Instant sex will never be better than the kind you have to peel and cook.',
    'Is this true or only clever?  -- Augustine Birrell',
    'Is there life before death?',
    'Is a mirage real?  Well, it\'s a real mirage.  -- Edward Abbey',
    'It is a miracle that curiosity survives formal education.  -- Albert Einstein',
    'It is not a good omen when goldfish commit suicide.',
    'It was a brave man that ate the first oyster.',
    'It does not do to leave a live dragon out of your calculations.',
    'It doesn\'t matter whether you win or lose -- until you lose.',
    'It is better to have loved and lost than just to have lost.',
    'It would be nice to be sure of anything the way some people are of everything.',
    'It is not an optical illusion, it just looks like one.  -- Phil White',
    'It was a book to kill time for those who liked it better dead.',
    'It has just been discovered that research causes cancer in rats.',
    'It is difficult to legislate morality in the absence of moral legislators.',
    'It is bad luck to be superstitious.  -- Andrew Mathis',
    'It\'s not whether you win or lose. It\'s whether *I* win or lose.',
    'It\'s always darkest just before it goes pitch black.',
    'It\'s hard to soar like an eagle when you are surrounded by turkeys.',
    'Journalism is literature in a hurry.  -- Matthew Arnold',
    'Journalism will kill you, but it will keep you alive while you are at it.',
    'Jury:  Twelve men and women trying to decide which party has the best lawyer.',
    'Justice:  A decision in your favor.',
    'Keep a very firm grasp on reality, so you can strangle it at any time.',
    'Keep Canada beautiful.  Swallow your beer cans.',
    'Keep stress out of your life.  Give it to others instead.',
    'Kilroy occupied these spatial coordinates.',
    'Knocked; you weren\'t in.  -- Opportunity',
    'Know thyself -- but don\'t tell anyone.',
    'Krogt:  The metallic silver coating found on scratch-and-win tickets.',
    'Lactomangulation:  Abusing the "open here" spout on a milk carton.',
    'Laugh at your problems; everybody else does.',
    'Laugh, and the world ignores you.  Crying doesn\'t help either.',
    'Lead me not into temptation.  I can find it myself.',
    'Let not the sands of time get in your lunch.',
    'Let him who takes the Plunge remember to return it by Tuesday.',
    'Let\'s hope God grades on a curve.',
    'Life is like a fountain...  I will tell you how when I figure it out.',
    'Life is like an analogy.',
    'Life is too confusing for novices.  We should let the experts take care of it.',
    'Living your life is so difficult, it has never been attempted before.',
    'Living on Earth includes one annual free trip around the Sun.',
    'Logic is a little bird, sitting in a tree, that smells AWFUL. --J. Handey',
    'Look out for #1. Don\'t step in #2, either.',
    'Look where you dare not look, and you\'ll find ME staring back at you.',
    'Lorena to Tonya: here, smack Nancy with *this*...',
    'Love means nothing to a tennis player.',
    'Love thy neighbor:  Tune thy piano.',
    'Love your enemies.  It will make them crazy.',
    'Love is the only game that is not called on account of darkness.',
    'Love means having to say you\'re sorry every five minutes.',
    'Love: the word that paints a thousand pictures.',
    'Love:  The warm feeling you get towards someone who meets your neurotic needs.',
    'Madness takes its toll. Please deposit exact change.',
    'Maggit:  A subscription card that falls from a magazine.',
    'Magnocartic:  An automobile that when left unattended attracts shopping carts.',
    'Maintain thy airspeed, lest the ground rise up and smite thee.',
    'Majority:  That quality that distinguishes a crime from a law.',
    'Make money fast: don\'t give it any food.',
    'Make a firm decision now...  you can always change it later.',
    'Make things as simple as possible, but not simpler. --Einstein',
    'Male zebras have white stripes, but female zebras have black stripes.',
    'Mankind...  infests the whole habitable Earth and Canada.  -- Ambrose Bierce',
    'Many are cold, but few are frozen.',
    'Many quite distinguished people have bodies similar to yours.',
    'May you die in bed at 95, shot by a jealous spouse.',
    'Maybe you can\'t buy happiness, but these days you can certainly charge it.',
    'Michelangelo would have made better time with a roller.',
    'Millihelen:  The amount of beauty required to launch one ship.',
    'Miracles are great, but they are so damned unpredictable.',
    'Mold has spores.  People have pores.  It is one way to tell us apart.',
    'Momentum:  What you give a person when they are going away.',
    'Money DOES talk -- it says goodbye.',
    'Money is better than poverty, if only for financial reasons.',
    'Most of us hate to see a poor loser. Rich winners, though, are worse.',
    'Mowmuffins:  Dried accumulation of grass on the underside of lawnmowers.',
    'Mr. Worf!  Eating Christmas Cookies, on my bridge?',
    'Mr. Bullfrog sez:  Time is fun when you\'re having flies.',
    'MRducks. MRnot! MRso! Cedar wings? ...Whale oil beef hooked, MRducks!',
    'Multitasking allows screwing up several things at once.',
    'Music is the only sensual pleasure without vice.',
    'My mail reader can beat up your mail reader.',
    'My mother is a travel agent for guilt trips.',
    'My opinions are not those of my ex-employer.',
    'My Go  this  amn keyboar   oesn\'t have any  \'s.',
    'My used underwear is legal tender in 28 countries and counting.',
    'My opinions might have changed, but not the fact that I am right.',
    'My computer NEVER cras',
    'My name is Annie Key. Ouch! Why are you hitting me?!',
    'My last cow just died, so I won\'t need your bull anymore.',
    'My other tagline is a footnote.',
    'Never put off till tomorrow what you can ignore entirely.',
    'Never forget: 2 + 2 = 5 for extremely large values of 2.',
    'Never enough time, unless you\'re serving it.',
    'Never call a man a fool. Instead, borrow from him.',
    'Never eat prunes when you\'re famished.',
    'Never hit a man with glasses.  Use your fist.',
    'Never, never, never *MOON* a werewolf.',
    'Never get into a farting contest with a skunk.',
    'Never deprive someone of hope; it may be all they have.',
    'Next time you wave at me, use more than one finger, please.',
    'Nine out of ten doctors agree that one out of ten doctors is an idiot.',
    'Nine out of ten people think they are above average.  The rest are in therapy.',
    'No prizes for predicting rain.  Prizes only awarded for building arks.',
    'No wanna work.  Wanna bang on keyboard.',
    'Nobody has ever, ever, EVER learned all of WordPerfect.',
    'Nobody home but the lights, and they\'re out too.',
    'Nobody can be just like me. Even I have trouble.',
    'Nobody ever goes there, it\'s too crowded. (I\'ve actually HEARD this!)',
    'Not all men who drink are poets.  Some of us drink because we are not poets.',
    'Nothing increases your golf score like witnesses.',
    'Nothing cures insomnia like the realization that it is time to get up.',
    'Nudists are people who wear one-button suits.',
    'Nudist Camp sign: "Sorry, Clothed for Winter"',
    'Nugloo:  Single continuous eyebrow that covers the entire forehead.',
    'On the other hand...  you have different fingers.',
    'One good turn usually gets most of the blanket.',
    'One good thing about repeating your mistakes is that you know when to cringe.',
    'Our parents were never our age.',
    'Our policy is, when in doubt, do the right thing.  -- Roy Ash',
    'Out of the mouths of babes does often come cereal.',
    'Paint the backs of *all* the boats. Leave no stern untoned.',
    'Paper is always strongest at the perforations.  -- Corry',
    'Parallel lines DO meet, but only incognito.',
    'Paranoia? Hell, no. Heightened awareness is more like it.',
    'Pardon me, waiter. I like my water diluted.',
    'People who complain about the way the ball bounces usually dropped it.',
    'People who think they know everything greatly annoy those of us who do.',
    'People usually get what\'s coming to them...  unless it was mailed.',
    'People who live in glass houses shouldn\'t throw parties.',
    'Politics: n. from Greek; "poli"-many; "tics"-ugly, bloodsucking parasites.',
    'Positive:  Being mistaken at the top of your voice.',
    'Proctologist:  A doctor who puts in a hard day at the orifice.',
    'Quark!  Quark!  Beware the quantum duck!',
    'Question Authority...  and the Authorities will question you!',
    'Quidquid latine dictum sit, altum viditur. (Anything in Latin sounds deep) ',
    'Radioactive cats have 18 half-lives.',
    'Reality is for those too stupid to program holodecks.',
    'Rumper sticker on a horse:  "Get off my tail, because shit happens."',
    'Saddam Hussein is the father of the mother of all cliches.',
    'Satisfaction guaranteed, or twice your load back.-- sign on septic tank truck',
    'Save the Rainforest! Eat a vegetarian!',
    'Save the whales! Collect the whole set!',
    'Sign seen on door:  C  I  T  Y   P  L  A  N  N  ING ',
    'Sign on bank: We can loan you enough money to get you completely out of debt.',
    'Smoking is one of the leading causes of statistics.  -- Fletcher Knebel',
    'Snackmosphere:  The 95% air inside bags of potato chips.',
    'Some people would not recognize subtlety if it hit them on the head.',
    'Someday you will look back on this moment and plow into a parked car.',
    'Someday you will get your big chance -- or have you already had it?',
    'Sometimes you\'re the bird, and sometimes you\'re the windshield.',
    'Sometimes a cigar is just a cigar.  -- Sigmund Freud',
    'Sorry, but my karma just ran over your dogma.',
    'Spam Lite: with meat products like these, who needs taglines?',
    'Spirobits:  The frayed bits of left-behind paper in a spiral notebook.',
    'Stealing a rhinoceros should not be attempted lightly.',
    'That was Zen; this is Tao.',
    'The two most common things in the universe are hydrogen and stupidity.',
    'The older a man gets, the farther he had to walk to school as a boy.',
    'The trouble with political jokes is that they get elected.',
    'The secret of success is sincerity.  Once you can fake that, you have it made.',
    'The universe is surrounded by whatever it is that surrounds universes.',
    'The trouble with being punctual is that no one is there to appreciate it.',
    'The prairies are vast plains covered by treeless forests.',
    'The bigger they are, the harder they hit.',
    'The lion and the calf shall lie down together. The calf won\'t sleep.',
    'The Schizophrenic:  An Unauthorized Autobiography.',
    'The Swedish Chef has been assimilated. Borg borg borg!',
    'The one who says it can\'t be done should never interrupt the one doing it.',
    'The number watching you is proportional to the stupidity of your action.',
    'The bureaucracy expands to meet the needs of an expanding bureaucracy.',
    'The cynic says: the pessimist is a realist who isn\'t afraid to admit it.',
    'The chief cause of problems is solutions.',
    'The best way to inspire fresh thoughts is to seal the envelope.',
    'The grass is always greener on the other side of your sunglasses.',
    'The most enjoyable form of sex education is the Braille method.',
    'The death rate on Earth is: .... (computing) .... One per person.',
    'The glass is half full--and what\'s in it has gone rancid.',
    'The early worm deserves the bird.',
    'The generation of random numbers is too important to be left to chance.',
    'The world\'s coming to an end. Log off and leave in an orderly fashion.',
    'The first piece of luggage out of the chute does not belong to anyone, ever.',
    'The sex act is the funniest thing on the face of this Earth.  -- Diana Rigg',
    'The problem with the gene pool is that there is no lifeguard.',
    'There are 3 kinds of people: those who can count, and those who can\'t.',
    'There is no idea so stupid that some professor doesn\'t believe in it.',
    'There is a vas deferens between men and women.',
    'There must be more to life than sitting wondering if there is more to life.',
    'There is a 70% probability of tomorrow. (actual weatherman quote. 1988)',
    'There are many kinds of people in the world.  Are you one of them?',
    'There is no bottom to worse.  -- Cohen',
    'There\'s not enough sax and violins on television.',
    'These are only my opinions. You should see my convictions.',
    'They laughed when I said I\'d be a comedian. They aren\'t laughing now.',
    'They couldn\'t hit an elephant at this dist...-Sedgwick\'s last words',
    'Things are more like they are now than they have ever been. --Gerald Ford.',
    'This is the sort of English up with which I will not put. - Winston Churchill',
    'This is news. This is your brain on news. Any questions?',
    'This is my last sig. I gave up smoking.',
    'This sentence contradicts itself: no, wait, actually it doesn\'t.',
    'This will be a memorable month -- no matter how hard you try to forget it.',
    'This is Borg. <ESC> is futile <CTRL> is inevitable.',
    'This sentence no verb.',
    'This statement is in no way to be construed as a disclaimer.',
    'This letter fills a much-needed gap.',
    'This is National Non-Dairy Creamer Week.',
    'This aphorism would be seven words long if it were six words shorter.',
    'Time is the best teacher; unfortunately, it kills all its students.',
    'Time flies like the wind, but fruit flies like bananas.',
    'Time is an illusion perpetrated by the manufacturers of space.',
    'To be, or not to be, those are the parameters.',
    'To define recursion, we must first define recursion.',
    'To study a subject best, understand it thoroughly before you start.',
    'To err is human.  To blame someone for your errors is even more human.',
    'To attract a vegetarian, make a noise like a wounded vegetable.',
    'To do it: Hire someone, or forbid your kids.',
    'To err is human.  To admit it is a blunder.',
    'Today is the tomorrow you worried about yesterday.',
    'Today\'s greatest labour-saving device is...tomorrow!',
    'Toe: A part of the foot used to find furniture in the dark.  -- Rilla May',
    'TV is called a medium because it is neither rare nor well done.',
    'Two cars in every pot and a chicken in every garage.',
    'Two wrongs don\'t make a right, but three lefts do.',
    'U2 will become one with the Borg. We like Bono.',
    'Unable to open LEVI.ZIP. Continue running TAKELEAK.EXE? (Y/N)',
    'Unauthorized fornication with this equipment is disallowed.',
    'Under capitalism, man exploits man.  Under communism, the opposite applies.',
    'Under-Achievers Anonymous has an 11-step program.',
    'Verbing weirds language.                --Calvin',
    'Very few profundities can be expressed in less than 80 characters.',
    'Volcano:  A mountain with hiccups.',
    'Volvo, Video, Velcro. (I came, I saw, I stuck around.)',
    'Vote anarchist.',
    'We aren\'t sure how clouds form.  But they know, that is what counts.',
    'We totally deny the allegations. We are trying to identify the allegators.',
    'We\'ve taken his life and secretly replaced it with Foldgers Crystals.',
    'We have them just where they want us.  -- James Kirk',
    'We will cross out that bridge when we come back to it later.',
    'We need either less corruption or more chance to participate in it.',
    'We have engaged the Borg. The wedding will be Friday.',
    'What is orange and goes "click, click"?  A ball point carrot.',
    'What this country needs is more leaders who know what this country needs.',
    'What is mind?  No matter.  What is matter?  Never mind.  -- Thomas Key',
    'What if there were no hypothetical situations? --Andrew Kohlsmith',
    'When professors want your opinion, they\'ll give it to you.',
    'When working hard, be sure to get up and retch every so often.',
    'When you\'ve seen one non-sequitur, the price of tea in China.',
    'When you are in it up to your ears, keep your mouth shut.',
    'When is summer in Canada? Last year it was a Tuesday in July.',
    'When in doubt, do as doubters do.',
    'When it\'s you against the world, bet on the world.',
    'When marriage is outlawed, only outlaws will have inlaws.',
    'When you make your mark in the world, watch out for guys with erasers.',
    'When things look dark, hold your head high so it can rain up your nose.',
    'Where there is a will, there is an Inheritance Tax.',
    'While money doesn\'t buy love, it puts you in a great bargaining position.',
    'Why doesn\'t life come with subtitles?',
    'Why is it that there are so many more horses\' asses than horses?  -- Liddy',
    'Why isn\'t there a special name for the tops of your feet?  -- Lily Tomlin',
    'Why did the tachyon cross the road?  Because it was on the other side.',
    'Why don\'t "minimalists" find a shorter name for themselves?',
    'Why isn\'t "phonetic" spelled the way it\'s said?',
    'Why is "abbreviated" such a long word?',
    'Why take life seriously? You\'re not coming out of it alive anyway!',
    'Winning isn\'t everything, but losing isn\'t anything.',
    'Wise is the squirrel. For he says: "You are a nut!"',
    'Women fake orgasm because men fake foreplay.',
    'Work is the curse of the drinking class.',
    'Working in a McDonald\'s kitchen: one <beep>ing thing after another...',
    'Writing free verse is like playing tennis with the net down.',
    'Yawning is an orgasm for your face.  -- Gunvar Ingeborg',
    'Yes, I get funny looks. I like funny looks.',
    'Yo-yo:  Something occasionally up but normally down (see also "computer").',
    'You can fool some of the people some of the time, and that is sufficient.',
    'You have the body of a 19 year old. Please return it before it gets wrinkled.',
    'You are warm and giving toward others.  What are you after?',
    'You can\'t hear it, but the universe is laughing at you behind your back.',
    'You are here.  But you are not all there.',
    'You are not paranoid if they\'re really after you...',
    'You are wrong when right and right when left, if you\'re driving in the US.',
    'You simply *must* stop taking other people\'s advice.',
    'You have the capacity to learn from mistakes.  You will learn a lot today.',
    'Your lucky number is 364958674928.  Watch for it everywhere.',
    'Your reasoning is silly and irrational but it is beginning to make sense.',
    'Your fault -- core dumped.',
    'Your password is pitifully obvious.',
    'ZAP! Process discontinued. Enter any 12-digit prime number to resume.'
  ];

  function load_scene(scene, color, duration) {
        Crafty.e("2D, Canvas, Tween, Color, DOM")
          .attr({alpha: 0, x:0, y:0, w:Crafty.viewport.width, h:Crafty.viewport.height, z:100})
          .color(color)
          .tween({alpha: 1.0}, duration)
          .bind("TweenEnd", function() {
            Crafty.scene(scene);
            Crafty.e("2D, Canvas, Tween, Color, DOM")
              .attr({alpha:1.0, x:0, y:0, w:Crafty.viewport.width, h:Crafty.viewport.height, z:100})
              .color("#000000")
              .tween({alpha: 0.0}, duration);
          });
  }

  Crafty.init(640, 480);
  Crafty.canvas.init();

  // Automatically pause if we lose focus
  Crafty.settings.modify("autoPause", true);

  Crafty.scene("loading", function() {
    
    Crafty.load([
      "graphics/cows.png",
      "graphics/desert.png",
      "graphics/title.png",
      "music/track01.mp3",
      "music/track02.mp3",
      "music/cow-a.wav",
      "music/yell2.wav",
      ], function() {

      Crafty.audio.add("song1", "music/track01.mp3");
      Crafty.audio.add("song2", "music/track02.mp3");
      Crafty.audio.add("moo", "sounds/cow-a.wav");
      Crafty.audio.add("yell", "sounds/yell2.wav");

      Crafty.sprite(50, 'graphics/cows.png', {
          cow1: [0,0],
          cow2: [1,0]
          });

      Crafty.scene("title");
    });

    Crafty.background("#fff");
    Crafty.e("2D, DOM, Text")
      .attr({w: Crafty.viewport.width, h: Crafty.viewport.height})
      .text("Loading...")
      .css({ 
        "font-family": "crystal",
        "font-size": "20pt",
        "color": "#000000"
      });
  });

  Crafty.scene("game", function() {

    var cowMinSpeed = 2;
    var cowSpeedRange = 5;
    var cowDelay = 20;
    var cowKill = 0;
    var cowLevel = 1;
    var score = 0;

    Crafty.audio.stop("song1");
    Crafty.audio.play("song2",-1);

    Crafty.c('Cow', {
      init: function() {
      },

      makeCow: function(y, speed) {
        this.speed = speed;

        this.requires("SpriteAnimation")
          .animate("walk", 0, 0, 1)
          .animate("dead", 2, 0, 2)
          .animate("walk", 8, -1)
          .attr({x: Crafty.viewport.width, y: y, z: 4})

          .bind('Click', function() {
            cowKill += 1;
            if (cowKill > 20) {
              if (cowDelay > 1 && (cowLevel %2 == 0)) cowDelay-=1;
              cowMinSpeed += 1;
              cowLevel += 1;
              cowKill = 0;
              console.log("Level-up to ", cowLevel);
            }
            Crafty.audio.play("moo", 1, .3);
            this.speed=0;
            this.z=1;
            score += Math.round((this.x/Crafty.viewport.width) * 500);
            scoreboard.text("Level: " + cowLevel + " - Score: " + score);
            this.stop()
              .unbind("Click")
              .animate("dead", 10, -1)
              .tween({alpha: 0.0}, 40)
              .timeout(function() {
                this.destroy();
              }, 1000);
          })

          .bind('EnterFrame', function() {
            this.x -= this.speed;
            if (this.x < 0) {
              Crafty.trigger("gameover");
              Crafty.audio.play("yell", 1, .5);
              $.cookie("highscore", score, {expires: 365});
              this.destroy();
            };
          })

          .bind("gameover", function() {
            this.speed=0;
            this.stop();
          });
        return this;
      }
    });

    // Setup background image
    var bg = Crafty.e("2D, DOM, Image")
      .attr({w: Crafty.viewport.width, h:Crafty.viewport.height})
      .image("graphics/desert.png") ;

    // Crappy scoreboard
    var scoreboard = Crafty.e("2D, DOM, Text, score")
      .attr({ x: Crafty.viewport.width-300, y: 10, w: 280 })
      .css({ 
        "font-family": "crystal",
        "font-size": "20pt",
        "color": "#ffffff",
        "text-align": "right"
      })
      .text("go get 'em  cows!");

    // Setup bogus element to span cows
    Crafty.e("2D, DOM")
      .bind('EnterFrame', function () {
        if (Crafty.math.randomInt(0, cowDelay*3) === 0) {
          Crafty.e("2D, DOM, Mouse, SpriteAnimation, cow1, Cow, Tween")
            .makeCow(
                Crafty.math.randomInt(180,Crafty.viewport.height - 50),
                Crafty.math.randomInt(cowMinSpeed, cowMinSpeed + cowSpeedRange),
                function() {
                });
        }
      })
      .bind("gameover", function() {
        this.unbind('EnterFrame');

        Crafty.e("2D, Canvas, Tween, Color, DOM, Mouse")
          .attr({alpha: 0, x:0, y:0, w:Crafty.viewport.width, h:Crafty.viewport.height, z:60})
          .color("#000000")
          .tween({alpha: 0.8}, 20);
          .timeout(function() {
            Crafty.e("2D, DOM, Text, Tween")
              .attr({x: 10, y:Crafty.viewport.height - 50, w: Crafty.viewport.width-20, alpha: 0, z: 66})
              .tween({alpha: 1}, 50)
              .css({ 
                "font-family": "crystal",
                "font-size": "20pt",
                "color": "#3333ff",
                "text-align": "center"
              })
              .text("~ Click to Play Again ~");
            this.bind("Click", function() {
              load_scene("title", "#ff0000", 20);
            });
          }, 700);
        Crafty.e("2D, DOM, Text, Tween")
          .attr({x: 10, y:120, w: Crafty.viewport.width-20, alpha: 0, z: 65})
          .tween({alpha: 1}, 50)
          .css({ 
            "font-family": "crystal",
            "font-size": "60pt",
            "color": "#ffffff",
            "text-align": "center"
          })
          .text("Game Over!");
        Crafty.e("2D, DOM, Text, Tween")
          .attr({x: 10, y:220, w: Crafty.viewport.width-20, alpha: 0, z: 65})
          .tween({alpha: 1}, 50)
          .css({ 
            "font-family": "crystal",
            "font-size": "20pt",
            "color": "#ffffff",
            "text-align": "center"
          })
          .text("Level: " + cowLevel);
        Crafty.e("2D, DOM, Text, Tween")
          .attr({x: 10, y:260, w: Crafty.viewport.width-20, alpha: 0, z: 65})
          .tween({alpha: 1}, 50)
          .css({ 
            "font-family": "crystal",
            "font-size": "20pt",
            "color": "#ffffff",
            "text-align": "center"
          })
          .text("Score: " + score);
      });

  });

  Crafty.scene("title", function() {

    Crafty.audio.stop("song2");
    Crafty.audio.play("song1",-1);

    // Setup background image
    var bg = Crafty.e("2D, DOM, Image")
      .attr({w: Crafty.viewport.width, h:Crafty.viewport.height})
      .image("graphics/title.png") ;

    Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, h:Crafty.viewport.height, w:Crafty.viewport.width })
      .bind("Click", function() { load_scene("game", "#ffffff", 10); /* Crafty.scene("game");*/});

    if ($.cookie("highscore")) {
      var highscore = Crafty.e("2D, DOM, Text, score")
        .attr({ x: Crafty.viewport.width-300, y: 10, w: 280 })
        .css({ 
          "font-family": "crystal",
          "font-size": "20pt",
          "color": "#ffffff",
          "text-align": "right"
        })
        .text("High-score: " + $.cookie("highscore"));
    }

    Crafty.e("2D, DOM, Text, Tween")
      .attr({alpha: 0, x: 20, y: Crafty.viewport.height-120, h:100, w: Crafty.viewport.width-40})
        .css({ 
          "font-family": "crystal",
          "font-size": "20pt",
          "color": "#dddddd",
          "text-align": "center"
        })
        .text("A game by Jeff & Christy Clement")
        .bind("TweenEnd", function() {
          if (this.alpha == 0) {
            this.text(_.first(_.shuffle(credits)));
            this.tween({alpha: 1}, 30);
          } else {
            this.timeout(function() {
              this.tween({alpha: 0}, 30);
            }, 1000);
          }
        })
        .tween({alpha: 1}, 30);

      
  });

  Crafty.scene("loading");

});
