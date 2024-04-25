import React, { useState } from 'react';


interface selectedFieldProps{
    field: string;
    jobs: string[];
    descriptions: string[];

    selectedField: string;
    updateSelectedField: (newField: string) => void;
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
        changeSelectedField(newJob);
    }

    
    
    return(
        <div>
            {fields.map((field: string) => <CareerSpider field={field} jobs={jobs[fields.indexOf(field)]} descriptions={descriptions[fields.indexOf(field)]} selectedField={selectedField} updateSelectedField={updateSelectedField}></CareerSpider>)}
        </div>
    );
}


export function CareerSpider({field, jobs, descriptions, selectedField, updateSelectedField}: selectedFieldProps): JSX.Element{
    return(
        <div onMouseEnter={() => updateSelectedField(field)} onMouseLeave={() => updateSelectedField("")}>

        </div>
    );
}

export function JobFly({job, description, selectedJob, updateSelectedJob}: selectedJobProps): JSX.Element{
    return(
        <div onMouseEnter={() => updateSelectedJob(job)} onMouseLeave={() => updateSelectedJob("")}>
            
        </div>
    );
}