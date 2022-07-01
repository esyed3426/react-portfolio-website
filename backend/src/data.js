const data = {
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website 1.0",
            date: "January 2022",
            tools: ["HTML", "CSS"],
            summary: "Created a (very terrible looking) website with basic HTML and CSS to impress potential employers (it didn't work)",
            note: "This was the first time I was creating a website on my own, some struggles I encountered were using Git to access the repository (ssh keys were playing hide and seek), making the website look better than a toddler's first attempt at painting, and making it seem responsive.",
            link: "https://github.com/esyed3426/Portfolio"
        },
        {
            id: 2,
            title: "Sudoku Solver",
            date: "January 2022",
            tools: ["Python"],
            summary: "Created a Python script to solve a Sudoku board via a backtracking algorithm (you've probably seen this before)",
            note: "Understanding the backtracking algorithm properly was the hardest part, add some recursion, and it's all good.",
            link: "https://github.com/esyed3426/Sudoku-Solver"
        },
        {
            id: 3,
            title: "Algorithmic Trading",
            date: "January 2022",
            tools: ["Python"],
            summary: "This was supposed to be a decent project, but it's basically just me manipulating data from a CSV file at the end of the day",
            note: "Some challenges were understanding exactly what was going on through the mountains of parsing I had to do to get things into Python variables from the CSV, and using Pandas and NumPy to store certain parts as tabular data.",
            link: "https://github.com/esyed3426/algorithmic-trading"
        },
        {
            id: 4,
            title: "Personal Portfolio Website 2.0",
            date: "July 2022",
            tools: ["HTML", "CSS", "JavaScript", "Node", "React"],
            summary: "Probably the only half decent thing you will find on this website... is this website (infinite recursion?)",
            note: "The story of how this site came to be is I was very sick and felt like I should do something. The backend is created with REST APIs and Node (Express) and contains data on the projects that help out with rendering things. The frontend is created with React. I haven't made the site yet but I will update this once I have.",
            link: "https://github.com/esyed3426/react-portfolio-website"
        }
    ]
};

export default data;