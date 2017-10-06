class Home extends React.Component { //home: para ser referenciada dentro de APP
	render() {
		return (
			<div className="main-content home">
				<span><h2><strong>Front End Course Directory</strong></h2></span>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends React.Component { // about: para ser referenciada dentro de APP
	render() {
		return (
			<div className="main-content">
				<h2><strong>About</strong></h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}
class Teachers extends React.Component{ // teacher:para ser referenciada dentro de APP
	render() {
		return (
			<div className="main-content">
				<h2><strong>teacher</strong></h2>
				<p>.</p>
			</div>
		);
	}
}


class Repos extends React.Component { // repos: para ser referenciada dentro de APP
	render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2><strong>REPOS</strong></h2>
					<ul className="course-nav">
						<li><a href='#/repos/html'>HTML</a></li>
						<li><a href='#/repos/css'>CSS</a></li>
						<li><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component { // AP. Etiqueta general
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
			case '/about': // about
				Child = About;
				break;
			case '/repos': // repos
				Child = Repos;
				break;
			case '/teachers': // teachers
				Child = Teachers;
				break;	
			case '/repos/html': // respos
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (// html
         <div data-reatroot className="container">
            <header>
				<span className="icn-logo">
					<i className="material-icons">logo</i>
				</span>
				</header>{' '}
            <menu>
			
               <ul className="main-nav">
			   		<li>
                     <a aria-current = "true" href="#/home" className="active"><strong>HOME</strong></a>
                   </li>{' '}
                  <li>
                     <a aria-current = "false" href="#/about"><strong>ABOUT</strong></a>
                  </li>{' '}
                  <li>
                     <a aria-current = "false" href="#/teachers"><strong>TEACHERS</strong></a>
                  </li>
				  <li>
                     <a aria-current = "false" href="#/repos"><strong>REPOS</strong></a>
                  </li>
               </ul>{' '}


            </menu>
	         { propsForRepos? <Child route = {propsForRepos} /> : <Child />} 

         </div> // repos
		);
	}
}
ReactDOM.render(<App  />,
document.getElementById("container"));