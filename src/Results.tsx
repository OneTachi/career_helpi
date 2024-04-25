import React, { useState } from 'react';


//fields: An array of the user's top career fields
//jobs: An array of a arrays of jobs, where each array of jobs corresponds to a career field. In other words, the first index of the 2d array is the career field and the second index is the job in that field.
//descriptions: The same as jobs, except instead of an array of an array of jobs it's an array of an array of job descriptions.

//selectedField: The career field that the user is currently hovering over.
interface selectedFieldProps{
    selectedField: string;
    changeSelectedField: (newField: string) => void;
}

interface selectedJobProps{
    selectedJob: string;
    changeSelectedJob: (newJob: string) => void;
}


export function Results({fields, jobs, descriptions}: {fields: string[], jobs: string[][], descriptions: string[][]}): JSX.Element{
    const [selectedField, changeSelectedField] = useState<string>("");
    const [selectedJob, changeSelectedJob] = useState<string>("");
    
    return(
        <div>

        </div>
    );
}


export function careerSpiders({field, jobs, descriptions}: {field: string, jobs: string[], descriptions: string}): JSX.Element{
    return(
        <div>

        </div>
    );
}

export function jobFlies({job, description}: {job: string, description: string}): JSX.Element{
    return(
        <div>

        </div>
    );
}