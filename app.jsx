// arreglo de profesores
const teacherList = [
  {
    img: "img/angieMcAngular.png",
    name: "Angie McAngular",
    information:
      "Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!"
  },
  {
    img: "img/geoLoCation.png",
    name: "Gelo 'Lo' Cation",
    information:
      "Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code."
  },
  {
    img: "img/jayQuery.png",
    name: "Jay Query",
    information:
      "Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher."
  },
  {
    img: "img/nodeStradamus.png",
    name: "NodeStradamus",
    information:
      "'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps."
  },
  {
    img: "img/ecmaScriptnstuff.png",
    name: "Ecma Scriptnstuff",
    information:
      "Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript."
  },
  {
    img: "img/jsonBabel.png",
    name: "Json Babel",
    information:
      "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job."
  }

];
// arreglo de cursos
const courseList = [
  {
    img: "img/howToMakeWebsite.png",
    course: "How To Make a Website",
    information:
      "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
  },
  {
    img: "img/htmlForms.png",
    course: "HTML Forms",
    information:
      "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis."
  },
  {
    img: "img/htmlVideoAndAudio.png",
    course: "HTML Video And Audio",
    information:
      "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
  },
  {
    img: "img/svgBasics.png",
    course: "SVG Basics",
    information:
      "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density."
  },
  {
    img: "img/responsiveImages.png",
    course: "Responsive Images",
    information:
      "Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible"
  },
  {
    img: "img/introductionHtmlAndCss.png",
    course: "Introduction to HTML And CSS",
    information:
      "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like."
  }

];

class Home extends React.Component {
  //home: para ser referenciada dentro de APP
  render() {
    return (
      <div className="main-content home">
        
          <h2>
            <strong>Front End Course Directory</strong>
          </h2>
        
        <p>
          This fun directory is a project for the <em>React Router Basics</em>{" "}
          course on Treehouse.
        </p>
        <p>
          Learn front end web development and much more! This simple directory
          app offers a preview of our course library. Choose from many hours of
          content, from HTML to CSS to JavaScript. Learn to code and get the
          skills you need to launch a new career in front end web development.
        </p>
        <p>
          We have thousands of videos created by expert teachers on web design
          and front end development. Our library is continually refreshed with
          the latest on web technology so you will never fall behind.
        </p>
        <hr />
      </div>
    );
  }
}

class About extends React.Component {
  // about: para ser referenciada dentro de APP
  render() {
    return (
      <div className="main-content">
        <h2>
          <strong>About</strong>
        </h2>
        <p>
          The front end course directory lists many of the courses we teach on
          HTML, CSS, JavaScript and more! Be sure to visit the Teachers section
          to view a list of our talented teachers. Or visit the Courses section
          and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
          courses.
        </p>
      </div>
    );
  }
}
class Teachers extends React.Component {
  // teacher:para ser referenciada dentro de APP
  
  render() 
    {
      return (
        <div className="main-content">
          <h2>
            <strong>Teachers</strong>
          </h2>
          <div>
              {teacherList.map((item, index)=>{
                return (<div key={index}>
                    <img src={item.img}/>
                    <span>{item.name}</span>
                    <div>{item.information}</div>
                  </div>
                  );
              })}
          </div>
        </div>
      );
    }
  }  
    
class Repos extends React.Component {
  // repos: para ser referenciada dentro de APP
  render() {
    const { route } = this.props;
    let CurrentList = null;
    switch (route) {
      case "css":
        CurrentList = courseList.map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
      case "javascript":
        CurrentList = ["How to Make a JS", "HTML JS"].map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
      default:
        //'html'
        CurrentList = [
          "How to Make a Website",
          "HTML Forms"
        ].map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
    }
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>
            <strong>COURSES</strong>
          </h2>
          <div className="course-nav">            
              <button><a href="#/repos/html">HTML</a></button>
                       
              <button><a href="#/repos/css">CSS</a></button>
                        
              <button><a href="#/repos/javascript">JavaScript</a></button>
            
          </div>

          <ul>{CurrentList}</ul>
        </div>

        {/* Write routes here... */}
      </div>
    );
  }
}

class App extends React.Component {
  // AP. Etiqueta general
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  //  $(document).ready ()
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      //<a href="#/about">About</a>
      //<li><a href='#/repos/html'>HTML</a></li>
      console.log(window.location.hash.substr(1));

      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForRepos = null;
    switch (this.state.route) {
      case "/about": // about
        Child = About;
        break;
      case "/repos": // repos
        Child = Repos;
        break;
      case "/teachers": // teachers
        Child = Teachers;
        break;
      case "/repos/html": // respos
        Child = Repos;
        propsForRepos = "html";
        break;
      case "/repos/css":
        Child = Repos;
        propsForRepos = "css";
        break;
      case "/repos/javascript":
        Child = Repos;
        propsForRepos = "javascript";
        break;
      default:
        Child = Home;
    }
    return (
      // html
      <div data-reatroot className="content">
        <header>
          <span className="icono">
            <i className="material-icons">code</i>
          </span>
               
          <ul className="main-nav">
            <li>
              <a aria-current="true" href="#/home" className="active">
                <strong>HOME</strong>
              </a>
            </li>{" "}
            <li>
              <a aria-current="false" href="#/about">
                <strong>ABOUT</strong>
              </a>
            </li>{" "}
            <li>
              <a aria-current="false" href="#/teachers">
                <strong>TEACHERS</strong>
              </a>
            </li>
            <li>
              <a aria-current="false" href="#/repos">
                <strong>COURSES</strong>
              </a>
            </li>
          </ul>{" "}
      </header>
        {propsForRepos ? <Child route={propsForRepos} /> : <Child />}
      </div> // repos
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
