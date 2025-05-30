# React-Learning
Learning React From Namaste Course

EP - 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
    </div>
    <script>
        const root = document.getElementById("root");
        const heading = document.createElement("h2")
        heading.innerHTML = "Hey React!"
        root.appendChild(heading) 
    </script>
</body>
</html>

This is how react is basically doing in backend

CDN -> Content delivery network

EP - 2

NPM  -> is not node package manager it’s a random name 

Package.json is the configuration for npm

1 .When we are installing a package there are two types of packages "dev dependency , normal dependency"

2 .A package is available in the npm repository. When you start using (installing) it in your project, it becomes a dependency.

3 .Difference between tilde (~) and caret (^) in package.json
Version difference if 4.2.8 to 4.2.9 is minor upgrade if instead of 4 it changes to 5 means its major update so when we use caret ^ it will automatically install the minor update not major update but tilde ~ will install the major update its better to use always caret ^
	4. Difference between package.json and package-lock.json is package.json will upgrade the package and having the details of the new one but package-lock.json will lock the exact version of the package which we used in the application right now..
	5. To run a application we need dependency to run that dependency it needs some dependency this is know as transitive dependency.
	6. "Npx "mean executing the package, "npm "means install packages
	7. "Npx parcel index.html " is the script to run the react in parcel
	8. What parcel is does 
		a. It builds dev
		b. Local server
		c. HMR - Hot module replacement - auto refresh 
		d. File watching algorithm - written in c++
		e. Caching - Faster Builds
		f. Image optimization because in browser image is costly operations
		g. Bundling
		h. Compress

EP-3

	1. What is react Element it’s a object "React.createElement" when we render this element | object to dom it will become HTML
	2. JSX is javascript like syntex
	3. This is not pure javascript syntex  const heading = <h2>This is a heading !</h2>;This code will transplied  before it reaches  to JS Engine -> its done by parcel (Babel Package) First by using Bable compiler it will convert that jsx to React.createElement() js object
	4.  There are 2 types of components "Class based component, Function Based components"
	5. Normal react object we can render it using React.render(heading) if it’s a component React.render(<Heading />)
	6. Component Composition is a Component inside a component 
	7. Its import to maintain to order like javascript
	
Geating the root
creating a element
appending![image](https://github.com/user-attachments/assets/5bd9af2f-c040-4f99-a257-3f60f645a7c6)
