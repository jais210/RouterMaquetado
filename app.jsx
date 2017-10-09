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
// arreglo HTML 
const HTMLCourses = [
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
    img: "img/responsiveImagespng.png",
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

const CSSCourses = [
  {
    img: "img/CssBasics.png",
    course: "CSS Basics",
    information:
    "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites."
  },
  {
    img: "img/CssSelectors.png",
    course: "CSS Selectors",
    information:
    "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements."
  },
  {
    img: "img/ResponsiveLayouts.png",
    course: "Responsive Layouts",
    information:
    "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design."
  },
  {
    img: "img/CSSFlexboxLayout.png",
    course: "CSS Flexbox Layout",
    information:
    "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!"
  },
  {
    img: "img/css-transitions-and-transforms.png",
    course: "CSS Transitions And Transforms",
    information:
    "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms."
  },
  {
    img: "img/badge_bootstrap-4-basics.png",
    course: "Bootstrap 4 Basics",
    information:
    "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time."
  }

];


const JSCourses = [
  {
    img: "img/javaScriptBasics.png",
    course: "Javascript Basics",
    information:
    "JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language."
  },
  {
    img: "img/JavaScripLoopsArraysAndObjects.png",
    course: "Javascript Loops,Arrays and Objects",
    information:
    "Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items."
  },
  {
    img: "img/jQueryBasics.png",
    course: "jQuery Basics",
    information:
    "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on."
  },
  {
    img: "img/AJAXBasics.png",
    course: "AJAX Basics",
    information:
    "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server."
  },
  {
    img: "img/interactivewebPagesWithJavascript.png",
    course: "Interactive Web Pages with Javascript",
    information:
    "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward."
  },
  {
    img: "img/node.JsBasics.png",
    course: "Node.js Basics",
    information:
    "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform."
  }

];

class Home extends React.Component {

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

  render() {
    return (
      <div className="main-content">
        <h2>
          <strong>Teachers</strong>
        </h2>
        <ul className='group'>
          {teacherList.map((item, index) => {
            return (
              <li className="teacher" key={index}>
                <img className="teacher-img img-responsive" src={item.img} alt='teacher' />
                <h3><center>{item.name}</center></h3>
                <p>{item.information}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Courses extends React.Component {

  render() {
    const { route } = this.props;
    let CurrentList = null;
    switch (route) {
      case "html":
        CurrentList = HTMLCourses;
        break;
      case "css":
        CurrentList = CSSCourses;
        break;
      case "javascript":
        CurrentList = JSCourses;
        break;
      default:

        CurrentList = HTMLCourses;
        break;
    }
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>
            <strong>COURSES</strong>
          </h2>
          <ul className="course-nav">
            <li><a className={CurrentList === HTMLCourses ? 'active' : ''} href="#/courses/html">HTML</a></li>

            <li><a className={CurrentList === CSSCourses ? 'active' : ''} href="#/courses/css">CSS</a></li>

            <li><a ClassName={CurrentList === JSCourses ? 'active' : ''} href="#/courses/javascript">JavaScript</a></li>

          </ul>
        </div>
        <ul>
          {CurrentList.map((item, index) => {
            return (
              <li className='course media group' key={index}>
                <img className='course-img img-responsive' src={item.img} alt='course' />
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.information}</p>
                </div>

              </li>
            );
          })
          }
        </ul>
      </div>

    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  //  $(document).ready ()
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForCourses = null;
    switch (this.state.route) {
      case "/home":
        Child = Home;
        break;
      case "/about":
        Child = About;
        break;
      case "/teachers":
        Child = Teachers;
        break;
      case "/courses":
        Child = Courses;

        break;
      case "/courses/html":
        Child = Courses;
        propsForCourses = "html";
        break;
      case "/courses/css":
        Child = Courses;
        propsForCourses = "css";
        break;
      case "/courses/javascript":
        Child = Courses;
        propsForCourses = "javascript";
        break;
      default:
        Child = Home;
    }
    return (
      // html
      <div className='content'>
        <header>
          <span className="icono">
            <i className="material-icons">code</i>
          </span>

          <ul className="main-nav">
            <li>
              <a className={Child === Home ? 'active' : ''} href="#/home" >
                <strong>HOME</strong>
              </a>
            </li>
            <li>
              <a className={Child === About ? 'active' : ''} href="#/about">
                <strong>ABOUT</strong>
              </a>
            </li>
            <li>
              <a className={Child === Teachers ? 'active' : ''} href="#/teachers">
                <strong>TEACHERS</strong>
              </a>
            </li>
            <li>
              <a className={Child === Courses ? 'active' : ''} href="#/courses">
                <strong>COURSES</strong>
              </a>
            </li>
          </ul>
        </header>
        {propsForCourses ? <Child route={propsForCourses} /> : <Child />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
