import React, { useState } from 'react';
import "./assets/css/Results.css"
import spider0 from "./assets/images/characters/main/idle (main).gif";
import spider1 from "./assets/images/characters/orange/idle (orange).gif";
import spider2 from "./assets/images/characters/blue/idle (blue).gif";


import miniWeb0 from "./assets/images/objects/progress bar/progressWeb0.png"; //Delete me!!!!

interface selectedFieldProps{
    field: string;
    jobs: string[];
    descriptions: string[];

    spiderNum: number;

    selectedField: string;
    updateSelectedField: (newField: string) => void;

    selectedJob: string;
    updateSelectedJob: (newJob: string) => void;
}

interface selectedJobProps{
    job: string;
    description: string;

    selectedJob: string;
    updateSelectedJob: (newJob: string) => void;
}

//fields: An array of the user's top career fields
//jobs: An array of a arrays of jobs, where each array of jobs corresponds to a career field. In other words, the first index of the 2d array is the career field and the second index is the job in that field.
//descriptions: The same as jobs, except instead of an array of an array of jobs it's an array of an array of job descriptions.

//selectedField: The career field that the user is currently hovering over.
//selectedJob: the job that the user is hovering over, the job of which is shown when they hover over the field that job is in.
export function Results({fields, jobs, descriptions}: {fields: string[], jobs: string[][], descriptions: string[][]}): JSX.Element{
    const [selectedField, changeSelectedField] = useState<string>("");
    const [selectedJob, changeSelectedJob] = useState<string>("");

    function updateSelectedField(newField: string){
        changeSelectedField(newField);

        if(newField === ""){ //If no field is selected, no job is selected either
            updateSelectedJob(newField);
        }
    }

    function updateSelectedJob(newJob: string){
        changeSelectedJob(newJob);
    }
    
    
    return(
        <div>
            <div onClick={() => updateSelectedField("")} className="Results-Click-Box"></div>
            {fields.map((field: string) => <CareerSpider field={field} jobs={jobs[fields.indexOf(field)]} descriptions={descriptions[fields.indexOf(field)]} selectedField={selectedField} updateSelectedField={updateSelectedField} selectedJob={selectedJob} updateSelectedJob={updateSelectedJob} spiderNum={fields.indexOf(field)}></CareerSpider>)}
        </div>
    );
}


export function CareerSpider({field, jobs, descriptions, selectedField, updateSelectedField, selectedJob, updateSelectedJob, spiderNum}: selectedFieldProps): JSX.Element{
    const spiders = [spider0, spider1, spider2];

    return(
        <div onMouseDown={() => updateSelectedField(field)} key={field} className = {"Career-Spider Spider-" + spiderNum.toString()}>
            <h3 className={"Field-Text"}>{field}</h3>
            <div className={"Career-Spider-Border"}>
                <img src = {spiders[spiderNum]} alt = "result spider img" className="Spider-Image"></img>
            </div>

            
            <img src = {spiders[spiderNum]} alt = "invis-push-spider" className="Spider-Image" style={{opacity:"0%", marginBottom: "5%", position: "relative"}}></img>
            {/*This is here because the Career-spider-border has abolsute positioning and the flies appear on top of it instead of being pushed by it, so a non-absolute invisible image of the same size should push the flies to the right spot*/}
          
            {field === selectedField && jobs.map((job: string) => <JobFly job={jobs[jobs.indexOf(job)]} description={descriptions[jobs.indexOf(job)]} selectedJob={selectedJob} updateSelectedJob={updateSelectedJob}></JobFly>)}
            
        </div>
    );
}

export function JobFly({job, description, selectedJob, updateSelectedJob}: selectedJobProps): JSX.Element{
    return(
        <div onMouseDown={() => updateSelectedJob(job)} key={job} style = {{backgroundColor: "purple"}} className="Job-Fly">
            <h2 className={"Job-Text"}>{job}</h2>
            <img src = {miniWeb0} alt = "test img" style = {{left: "50%", top: "50%"}} className = "Fly-Image"></img>
            {job === selectedJob && <div>{description}</div>}
        </div>
    );
}


//The following works for getting functional clicks to show the jobs of a certian field when you click on that field's spider, but I believe it won't work when clicking on jobs themselves due to this resulting in another mouseDown that would close the currently opened field
/*
    return(
        <div onMouseDown={() => updateSelectedField("")} className="Results-Click-Box">
            {fields.map((field: string) => <CareerSpider field={field} jobs={jobs[fields.indexOf(field)]} descriptions={descriptions[fields.indexOf(field)]} selectedField={selectedField} updateSelectedField={updateSelectedField} selectedJob={selectedJob} updateSelectedJob={updateSelectedJob} spiderNum={fields.indexOf(field) + 1}></CareerSpider>)}
        </div>
    );
}


export function CareerSpider({field, jobs, descriptions, selectedField, updateSelectedField, selectedJob, updateSelectedJob, spiderNum}: selectedFieldProps): JSX.Element{
 return(
        <div onMouseUp={() => updateSelectedField(field)} key={field} className={"Career-Spider Spider-" + spiderNum.toString()}>
            <h3 className={"Field-Text"}>{field}</h3>
            <img src = {mainSpider} alt = "result spider img" className="Spider-Image"></img>
            {field === selectedField && jobs.map((job: string) => <JobFly job={jobs[jobs.indexOf(job)]} description={descriptions[jobs.indexOf(job)]} selectedJob={selectedJob} updateSelectedJob={updateSelectedJob}></JobFly>)}
        </div>
    );
}

export function JobFly({job, description, selectedJob, updateSelectedJob}: selectedJobProps): JSX.Element{
    return(
        <div onMouseUp={() => updateSelectedJob(job)} key={job} style = {{backgroundColor: "purple"}} className="Job-Fly">
            <h2 className={"Job-Text"}>{job}</h2>
            <img src = {miniWeb0} alt = "test img" style = {{left: "50%", top: "50%"}} className = "Fly-Image"></img>
            <div>{description}</div>
        </div>
    );
}
*/