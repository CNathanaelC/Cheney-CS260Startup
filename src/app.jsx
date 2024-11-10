import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export default function App() {
  return (
    <body>
      <BrowserRouter>
        <header>
          <center>
            <h1>The Washington Guide</h1>
          </center>
          <nav>
            <center>
              <button className="btn btn-primary">
                <NavLink to="/">Home</NavLink>
              </button>
              <button className="btn btn-primary">
                <NavLink to="destinations">Destinations</NavLink>
              </button>
              <button className="btn btn-primary">
                <NavLink to="gallery">Gallery</NavLink>
              </button>
              <button className="btn btn-primary">
                <NavLink to="folklore">Folklore</NavLink>
              </button>
              <button className="btn btn-primary">
                <NavLink to="blog">Blog</NavLink>
              </button>
              <button className="btn btn-primary">
                <NavLink to="login">Login</NavLink>
              </button>
            </center>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/folklore" element={<Folklore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thelake" element={<TheLake />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <div>
          <a href="https://github.com/CNathanaelC/Cheney-CS260Startup">More about my project</a>
        </div>
      </footer>
    </body>
  );
}



export function Home() {
  return (
    <main>
      <div className="container position-relative">
        <h1 className="upper_centered_text">Welcome to
          the Pacific Northwest</h1>
        <img src="./images/foggyboardwalk.jpg" alt="foggyboardwalk.jpg" style={{ width: '100%', height: '100%', cover: 'true' }} />
        <p className="lower_centered_text">
          Hidden among ancient forests and volcanic peaks, Washington State is a top tier
          destination for nature lovers and city folk alike. Whether you're searching
          for the solitude of forests or the quaint allure of a small town, Washington
          has something for everyone!
        </p>
      </div>
      <div>
        <p>
          Thanks for visiting my website! Feel free to explore
          the various featured destinations in the destinations
          tab, local stories in the folklore section, landscapes
          in the gallery, and some of my experiences in the blog.
        </p>
      </div>
    </main >
  )
};

export function Destinations() {
  return (
    <main>
      <h1 className="upper_centered_text">Destinations</h1>
      <div>
        <h3>Quick Links</h3>
        <li><a href="#LakeChelanQL">Lake Chelan</a></li>
        <li><a href="#SanJuanQL">The San Juan Islands</a></li>
        <li><a href="#OlympicNPQL">Olympic National Park</a></li>
        <li><a href="#MountRainierQL">Mount Rainier</a></li>
        <li><a href="#LeavenworthQL">Leavenworth</a></li>
        <li><a href="#NorthCascadesQL">The North Cascades</a></li>
        <li><a href="#SeattleQL">Seattle</a></li>
        <li><a href="#LakeQL" className="glitch">Skulchon Lake</a></li>
      </div>
      <div>
        <h3 id="LakeChelanQL">Discover the Magic of Lake Chelan</h3>
        <p>
          Lake Chelan is the deepest lake in Washington State, reaching a maximum depth of 1,480 feet! Whether you
          indulge in the local wineries or hike about its majestic mountains, Lake Chelan is perfect for all ages
          and interests.
        </p>
        <h4>Things to do near Lake Chelan</h4>
        <li>Visit Lake Chelan State Park</li>
        <li>Explore the wineries</li>
        <li>Take a boat tour with Lady of the Lake</li>
        <li>Hike the Chelan Butte Trail</li>
        <li>Enjoy Water Activities at Slidewaters</li>
        <li><a href="https://www.lakechelan.com/">Learn More</a></li>
      </div>
      <div>
        <h3 id="SanJuanQL">Conquer the San Juan Islands</h3>
        <p>
          Nestled in the peaceful water of the Pacific Northwest, the San Juan islands are an artifact of Washington State.
          Tap into your inner pirate as you set sail and explore each island. You never know what you'll find: a quiet lagoon or a forest full of raccoons!
          There's nothing quite like it!
        </p>
        <h4>Things to do near the San Juan Islands</h4>
        <li>Go Whale Watching</li>
        <li>Explore Moran State Park</li>
        <li>Visit Lime Kiln Point State Park</li>
        <li>Kayak through the Islands</li>
        <li>Discover the Whale Museum</li>
        <li><a href="https://www.visitsanjuans.com/">Learn More</a></li>
      </div>
      <div>
        <h3 id="OlympicNPQL">Explore the Wonders of Olympic National Park</h3>
        <p>
          Olympic National Park is a UNESCO World Heritage site, known for its diverse ecosystems ranging from lush rainforests to rugged coastlines.
          Whether you're an avid hiker or just looking to relax in nature, Olympic National Park offers something for everyone.
        </p>
        <h4>Things to do near Olympic National Park</h4>
        <li>Hike the Hoh Rain Forest Trail</li>
        <li>Visit the Sol Duc Hot Springs</li>
        <li>Explore the tide pools at Rialto Beach</li>
        <li>Drive up to Hurricane Ridge for stunning views</li>
        <li>Camp at Kalaloch Campground</li>
        <li><a href="https://www.nps.gov/olym/planyourvisit/index.htm">Learn More</a></li>
      </div>
      <div>
        <h3 id="MountRainierQL">Ascend the Majesty of Mount Rainier</h3>
        <p>
          Mount Rainier is an iconic symbol of Washington State, standing at 14,411 feet.
          This active stratovolcano is surrounded by subalpine wildflower meadows and ancient forests, making it a paradise for nature lovers and adventure seekers.
        </p>
        <h4>Things to do near Mount Rainier</h4>
        <li>Hike the Skyline Trail at Paradise</li>
        <li>Visit the Sunrise Visitor Center</li>
        <li>Take a scenic drive on the Stevens Canyon Road</li>
        <li>Explore the Grove of the Patriarchs</li>
        <li>Go snowshoeing in winter</li>
        <li><a href="https://www.nps.gov/mora/index.htm">Learn More</a></li>
      </div>
      <div>
        <h3 id="LeavenworthQL">Experience the Charm of Leavenworth</h3>
        <p>
          Leavenworth is a Bavarian-style village nestled in the Cascade Mountains.
          Known for its festive atmosphere and stunning alpine scenery, Leavenworth is a year-round destination with activities for all ages.
        </p>
        <h4>Things to do near Leavenworth</h4>
        <li>Attend the annual Oktoberfest celebration</li>
        <li>Explore the Icicle Gorge Trail</li>
        <li>Visit the Leavenworth Reindeer Farm</li>
        <li>Shop and dine in the Bavarian Village</li>
        <li>Go white-water rafting on the Wenatchee River</li>
        <li><a href="https://leavenworth.org/">Learn More</a></li>
      </div>
      <div>
        <h3 id="NorthCascadesQL">Unveil the Beauty of North Cascades National Park</h3>
        <p>
          North Cascades National Park is a hidden gem, offering rugged mountain landscapes, pristine alpine lakes, and abundant wildlife.
          It's a haven for outdoor enthusiasts looking to escape the crowds and immerse themselves in nature.
        </p>
        <h4>Things to do near North Cascades National Park</h4>
        <li>Hike the Cascade Pass Trail</li>
        <li>Visit the Diablo Lake Overlook</li>
        <li>Explore the Ross Lake National Recreation Area</li>
        <li>Take a scenic drive on the North Cascades Highway</li>
        <li>Camp at Colonial Creek Campground</li>
        <li><a href="https://www.nps.gov/noca/index.htm">Learn More</a></li>
      </div>
      <div>
        <h3 id="SeattleQL">Dive into the Vibrancy of Seattle</h3>
        <p>
          Seattle, known as the Emerald City, is a bustling metropolis surrounded by water, mountains, and evergreen forests.
          It's a hub for technology, music, and culture, offering a diverse array of attractions and activities.
        </p>
        <h4>Things to do in Seattle</h4>
        <li>Visit the iconic Space Needle</li>
        <li>Explore Pike Place Market</li>
        <li>Wander through the Chihuly Garden and Glass</li>
        <li>Take a ferry ride to Bainbridge Island</li>
        <li>Discover the Museum of Pop Culture</li>
        <li><a href="https://visitseattle.org/">Learn More</a></li>
      </div>
      <div>
        <h3 id="LakeQL" className="glitch">Skulchon Lake</h3>
        <p>
          A beautiful vista that I have recently come across. There is a nice small town nearby and some crazy history and lore.
          I'll talk more about it on the blog. So keep tabs on that as I hopefully hype up this new destination!
        </p>
        <h4>Things to do in Skulchon</h4>
        <li>Coming soon...</li>
        <li>Coming soon...</li>
        <li>Coming soon...</li>
        <li>Coming soon...</li>
        <li><a href="" className="glitch">Learn More</a></li>
      </div>
    </main>
  )
};

export function Gallery() {
  return (
    <main>
      <div className="gallery-container">
        <center>
          <h1>Gallery</h1>
        </center>
        {/* </div><!--Javascript on click open the image-->*/}
        {/*<!--sometimes the image will reveal secret messages-->*/}
        {/*<!--sometimes images not usually there will appear--> */}
        <div className="gallery">
          <img src="images/home.jpg" alt="Home" />
          <img src="images/beams.jpg" alt="Beams" />
          <img src="images/frozenwater.jpg" alt="Frozen Water" />
          <img src="images/clearreflection.jpg" alt="Clear Reflection" />
          <img src="images/mistyoverlook.jpg" alt="Misty Overlook" />
          <img src="images/mountaingoats1.jpg" alt="Mountain Goats" />
          <img src="images/mountainlake.jpg" alt="Mountain Lake" />
          <img src="images/passagewayup.jpg" alt="Passageway Up" />
          <img src="images/riverrun.jpg" alt="River Run" />
          <img src="images/riversunmountain.jpg" alt="River Sun Mountain" />
          <img src="images/rockpeak.jpg" alt="Rock Peak" />
          <img src="images/waterfall1.jpg" alt="Waterfall" />
        </div>
      </div>
    </main>
  )
};

export function Blog() {
  function open_textbox(reveal_id) {
    var textboxcontainer = document.getElementById(reveal_id);
    if (textboxcontainer.classList.contains('hidden')) {
      textboxcontainer.classList.remove('hidden');
    } else {
      textboxcontainer.classList.add('hidden');
    }
  }
  return (
    <main>
      <center>
        <div>
          <h1>Blog</h1>
        </div>
      </center>
      <div>{/*<!--This section below is a placeholder for where blogs will be posted-->*/}
        <p>Posted: 11:19 AM, 9/27/2024</p>
        <p>Welcome to my blog! This is where I am going to starting posting some of my day-to-day experiences with
          hiking and exploring in various areas!
          I won't reveal where I am going exploring first since I'm not sure I want to dox it quite yet, since its
          pretty secluded and out of the
          the eyes of the public. However, I can't wait for each of you to experience this wonderful hike and its
          surrounding area once I do. Keep posted for updates
          which should be recurring in the coming weeks. Thanks for joining me on this journey!</p>
        <p>
          <button id="open_comment_box" className="btn btn-primary" onClick={() => open_textbox("tbcont1")}>Comment</button>
        </p>
        <div id="tbcont1" className="hidden">
          <textarea id="textbox" rows="4" cols="50"></textarea>
          <button className="btn btn-primary">Post</button>
        </div>
      </div>
      <div>
        <p>Posted: 3:39 PM, 10/4/2024</p>
        <p>
          After a couple preliminary searches for the location, it seems the internet doesn't even know where this
          is, so I'll go ahead and share it. For this season
          of the blog, I will traveling around Skulchon Lake and its associated town. I know I said that I would
          be
          updating sooner, but it looks like I need to figure
          out a couple more things.
        </p>
        <p>
          <button className="btn btn-primary" onClick={() => open_textbox("tbcont2")}>Comment</button>
        </p>
        <div id="tbcont2" className="hidden">
          <textarea id="textbox" rows="4" cols="50"></textarea>
          <button className="btn btn-primary">Post</button>
        </div>
      </div>
      <div>
        <p>Posted: 6:33 PM, 11/9/2024</p>
        <p>
          Sorry, it's been a while since I last posted. This site is honestly barely functional, but it's a work in
          progress that I want to continue to work on. Well, I finally traveled to Skulchon. In classic Washingtonian fashion,
          the locals are hesitant to interact with others. Perhaps I'm being too harsh. I've had plenty of positive, friendly interactions
          with people in Olympia, Bellevue, and Leavenworth. Although, the caution of Skulchon residents is understandable given their history.
          It all goes back to the early 1900's, when about twenty people from their community got involved in a cult! I read a couple interviews
          published in old editions of their local newspaper and most family members and friends of those who were part of the cult had no idea of
          their involvement. Some members of the cult were even prominent parts of the community: the mayor, librarian, and several police officers.
          The story goes, a series of drownings suddenly happening in a short span of time--these were all ruled as suicides/accidents. One officer,
          John Salas wasn't having it. Single handedly, on the day of a prominent festival, Officer Salas confronted the cult. Little is known about
          this, but the resulting conflict resulted in the death of all the people present. John Salas died of strangulation, his daughter, Matika Salas
          died by suicide by gunshot, six of the cultists died by gunshot, and the other thirteen died by suicidal drowning. The earlier drownings were
          pinned on the cult--determined to be as a result of some kind of brainwashing.
        </p>
        <p>
          I know that was a lot of exposition, but I thought it was fascinating that such a small, obscure town has such a morbidly fascinating history. After
          too much time spent at the library, I think I'm going to go on my adventure for the day: hiking Mount Shuulal. I'll be sure to update you all as soon
          as possible.
        </p>
        <p>
          <button className="btn btn-primary" onClick={() => open_textbox("tbcont3")}>Comment</button>
        </p>
        <div id="tbcont3" className="hidden">
          <textarea id="textbox" rows="4" cols="50"></textarea>
          <button className="btn btn-primary">Post</button>
        </div>
      </div>
    </main>
  )
};

export function Login() {
  return (
    <main>
      <center>
        <h2>Login</h2>
        <form method="get" action="/">
          <div>
            <span>Username:</span>
            <input type="text" placeholder="username" />
          </div>
          <div>
            <span>Password:</span>
            <input type="password" placeholder="password" />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      </center>
    </main>
  )
};


export function TheLake() {
  return (
    <main style={{ color: 'black' }}>
      <video autoPlay muted loop id="background_video">
        <source src="images/reflection.mp4" type="video/mp4" />
      </video>
      <center>
        <h1>RETURN</h1>
      </center>
      <center>
        <p className="glitch">
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN***RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**neve**RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**n**RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**nev**RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RET**RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**URN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**er**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**ever**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDT**RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lak**HEEDTHECALL**e**RETURN**bed**RETURN**never**RETURN****RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**REHEEDTHECALL**TURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**HEEDTHEC**HEEDTHECALL**ALL**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**RHEEDTHECALL**ETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**HEEDTHECALL**HEEDTHECALL**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**RHEEDTHECALL**ETURN**HEEDTHECALL**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN**neHEEDTHECALL**ver**RETURN**sleeps**RETURN****RETURN**
          **RETURN**the**RETURN**lake**RHEEDTHECALL**ETURN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**REHEEDTHECALL**TURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**RETURN****RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**HECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**r**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**REHEEDTHECALL**TURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN*****RETURN**lake**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN**bed**REHEEDTHECALL**TURN**RETURN**never**HEEDTHECALL**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleepHEEDTHECALL**s**RETURN**
          **RETURN**the**RETURN**lake**RETURN****RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**bed**RETURN****RETURN**never**REHEEDTHECALL**TURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**HEEDTHECALL**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN****RETURN**lake**RETURN**bed**RHEEDTHECALL**ETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETURN**beHEEDTHECALL**d**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN****RETURN**the**RETURN**lake**RETHEEDTHECALL**URN**bed**RETURN**never**RETURN**sleeps**RETURN**
          **RETURN**the**RETURN**lake**RETUHEEDTHECALL**RN**RETURN**bed**RETURN**never**RETURN**sleeps**RETURN**
        </p>
      </center>
    </main>
  );
}


export function Folklore() {
  return (
    <main>
      <div>
        <div className="container">
          <h1 className="upper_centered_text">Folklore</h1>
          <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1348,w_2400,x_0,y_140/v1579882348/shape/mentalfloss/gettyimages-1196107442.jpg?itok=u0mrGNkU" alt="SasquatchSightings" style={{ width: '100%' }} />
        </div>

        <h3>Quick Links</h3>
        <ul>
          <li><a href="#SasquatchQL">Sasquatch</a></li>
          <li><a href="#GhostsQL">Ghost's of Pike's Place</a></li>
          <li><a href="#DragonQL">The Lake Chelan Dragon</a></li>
          <li><a href="#CultQL" className="glitch">The Skulchon Cult</a></li>
          <li><a href="">More to be added soon</a></li>
        </ul>
      </div>
      <div>
        <h3 id="SasquatchQL">Sasquatch</h3>
        <p>
          Everyone knows Sasquatch or Bigfoot and its many derivatives around the globe.
          While everyone is familiar with its large humanoid apelike appearance not all know
          that Washington has had the most reported sightings of any state.
        </p>
        <a href="https://www.bfro.net/">Learn more</a>
      </div>
      <div>
        <h3 id="GhostsQL">Ghosts of Pike's Place</h3>
        <p>
          There is a ramp that is part of the original building where boys would run back and
          forth as they would work at the stables, it is believed that this area is still haunted
          by quite a few of them. Some sightings have stated that they have seen a boy that stands
          in their shop, wearing a white shirt and a black vest. In addition, he has no eyes.
        </p>
        <a href="https://seattlerefined.com/lifestyle/pike-place-market-is-haunted-ghost-stories-with-author-mercedes-carrabba?photo=1">Learn more</a>
      </div>
      <div>
        <h3 id="DragonQL">The Lake Chelan Dragon</h3>
        <p>
          Lake Chelan is the deepest known lake in Washington state and the third deepest
          in the United States as a whole. Reaching as far back as 1812, reports of a giant
          winged lizard were rumored to make its lair at the lake and to cause general havoc.
        </p>
        <a href="https://mvlresort.com/2020/09/01/legend-of-the-dragon-of-lake-chelan/">Learn more</a>
      </div>
      <div>
        <h3 id="CultQL" className="glitch">The Skulchon Cult</h3>
        <p>
          In the early 1900's this cult was reportedly operating near the North Cascades region of Washington
          state.
          After multiple drowning cases that were originally ruled as accidents or suicides, it came to light that
          a religious cult was responsible. As several members of the cult were found out and arrested, the rest
          of the members of the cult met at Skulchon Lake on Midsummer and drowned themselves. Extensive
          information regarding their
          beliefs or motives for the murders was never ascertained, but it is rumored that they believed that they
          were to bring the victims to their god.
        </p>
        <a href="thelake" className="glitch">Learn more</a>
      </div>
    </main>
  );
}

