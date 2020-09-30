class ProjectItems {
    constructor(id) {
        this.id = id;
    }
}

class ProjectList {
    projects = [];
    constructor(type) {
        this.type = type
        const prjItems = document.querySelectorAll(`#${type}-projects li`);   /* selecting the list-Nodes for the specific type  */
        //console.log(prjItems)  // for debug
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItems(prjItem.id))
        }
        //console.log(this.projects[0].id) // for debug
    }

    addProject() { }

    switchProject(projectId) {
        this.projects = this.projects.filter((currentItem) => {
            return !(currentItem.id == projectId)
        })

    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init()