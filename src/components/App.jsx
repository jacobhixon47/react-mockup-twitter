import React from 'react';
// import Header from './Header';
// import TicketList from './TicketList';

function SearchBar() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '0.5%',
      flexGrow: '1'
    }}>
      <input placeholder="Search" style={{
        flexGrow: '3',
        padding: '2%',
        marginRight: '2%',
        border: '1px solid blue',
        borderRadius: '50px'
      }}/>
      <button style={{
        flexGrow: '1',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '50px'
      }}>Search</button>
    </div>
  );
}


function Header() {
  return (
    <div style={{
      padding: '1%',
      borderBottom: '2px solid blue',
      backgroundColor: 'white',
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '60px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexGrow: '3'
      }}>
        <button type="button" style={{
          padding: '1%',
          marginRight: '1%',
          flexBasis: '15%',
          color: 'blue',
          backgroundColor: 'transparent',
          border: '1px solid blue',
          borderRadius: '25px'
        }}>Home</button>
        <button type="button" style={{
          padding: '1%',
          marginRight: '1%',
          flexBasis: '15%',
          color: 'blue',
          backgroundColor: 'transparent',
          border: '1px solid blue',
          borderRadius: '25px'
        }}>Notifications</button>
        <button type="button" style={{
          padding: '1%',
          marginRight: '1%',
          flexBasis: '15%',
          color: 'blue',
          backgroundColor: 'transparent',
          border: '1px solid blue',
          borderRadius: '25px'
        }}>Messages</button>
      </div>
      <SearchBar />
    </div>
  );
}

function AboutMe() {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '5%'
    }}>
      <p>
        Lorem ipsum dolor amet umami four dollar toast microdosing, kogi unicorn glossier forage paleo wolf godard bespoke meggings kinfolk iPhone seitan. Yuccie retro art party coloring book hella actually truffaut cloud bread hell of hoodie lomo. Swag heirloom wayfarers, succulents meh church-key pok pok hoodie. Pork belly before they sold out PBR&B subway tile chicharrones fanny pack XOXO fingerstache skateboard master cleanse offal. You probably haven't heard of them ethical glossier helvetica kale chips meggings.
      </p>
    </div>
  );
}

function ProfileDisplay() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexGrow: '1',
      maxWidth: '23vw'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '17vw',
        background: 'linear-gradient(180deg, blue 53%, white 47%)',
        padding: '5%',
        marginBottom: '2%'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end'
        }}>
          <div style={{
            height: '75px',
            width: '75px'
          }}>
            <img src="http://www.cdn.innesvienna.net//Content/user-default.png" style={{
              width: '100%',
              height: '100%',
              border: '4px solid white',
              borderRadius: '30px'
            }}/>
          </div>
          <h3 style={{margin: '0px'}}>John Wick</h3>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <h4>Tweets</h4>
          <h4>Following</h4>
          <h4>Messages</h4>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

function Tweet() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '3%',
      backgroundColor: 'white',
      marginBottom: '2%'
    }}>
      <div style={{height: '50px', width: '60px'}}>
        <img src="http://www.cdn.innesvienna.net//Content/user-default.png" style={{
          width: '100%',
          height: '100%',
          border: '1px solid white',
          borderRadius: '30px'
        }}/>
      </div>
      <div style={{
        flexGrow: '2',
        width: '100%',
        margin: '0px',
        paddingLeft: '4%'
      }}>
        <h4 style={{
          margin: '0px'
        }}>John Wick</h4>
        <p>Lorem ipsum dolor amet umami four dollar toast microdosing.</p>
      </div>
    </div>
  );
}

function TweetList() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

function NewTweet() {
  return (
    <div style={{
      padding: '3%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '100%',
      backgroundColor: 'white',
      marginBottom: '2%'
    }}>
      <input placeholder="What's Poppin'?" style={{
        padding: '2%',
        flexGrow: '2',
        marginRight: '10px',
        borderRadius: '25px',
        border: '1px solid blue'
      }}/>
      <button style={{
        padding: '2%',
        flexGrow: '1',
        borderRadius: '25px',
        backgroundColor: 'blue',
        color: 'white'
      }}>Post</button>
    </div>
  );
}

function Timeline() {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      flexGrow: '2',
      maxWidth: '50vw'
    }}>
      <NewTweet />
      <TweetList />
    </div>
  );
}

function Friend() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '5%',
      marginBottom: '2%',
      backgroundColor: 'white'
    }}>
      <div style={{height: '50px', width: '60px'}}>
        <img src="http://www.cdn.innesvienna.net//Content/user-default.png" style={{
          width: '100%',
          height: '100%',
          border: '1px solid white',
          borderRadius: '30px'
        }}/>
      </div>
      <div style={{
        flexGrow: '2',
        width: '100%',
        margin: '0px',
        paddingLeft: '4%'
      }}>
        <h4 style={{
          margin: '0px',
          marginBottom: '2%'
        }}>John Wick</h4>
        <button style={{
          padding: '2%',
          color: 'blue',
          border: '1px solid blue',
          borderRadius: '25px'
        }}>Add Friend</button>
      </div>
    </div>
  );
}

function AddFriends() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexGrow: '1',
      maxWidth: '23vw'
    }}>
      <h4 style={{
        backgroundColor: 'white',
        padding: '5%',
        marginTop: '0',
        marginBottom: '2%'
      }}>Add Friends</h4>
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
}

function MainContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      paddingTop: '1%',
      overflow: 'scroll'
    }}>
      <ProfileDisplay />
      <Timeline />
      <AddFriends />
    </div>
  );
}


function App(){
  return (
    <div style={{
      backgroundColor: '#eeeeee',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
