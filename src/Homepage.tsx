import React from "react"
import { PageProps } from "./src/interfaces/page" 
import { Button } from "react-bootstrap"

export function Homepage({page, setPage} : PageProps) : JSX.Element
{
    return (
        <div>
            <div>
                <Button>Basic Questions</Button>
                <br/>
                <p>
                Our basic quiz is a multiple choice assessment that determines your strengths to find what you would be best at. 
                Remember, there are no wrong answers. Follow your heart, and you will get the results that are best for you!
                </p>

            </div>
            <div>
                <Button>Basic Questions</Button>
                <br />
                <p>
                Our complex quiz consists of open response boxes, sliders, and other inputs. It allows you to truly unleash your inner creativity and be yourself!
                You can answer questions with anything you want, and do what you think is best in each situation. 
                Just trust yourself and do the first thing that comes to mind. Most importantly, have fun!
                </p>
            </div>
        </div>
    )
}