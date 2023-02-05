import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">Description</h1>
            <br></br>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    we created this as a personal project, and we have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the GitHub .</p>
                    <p className="about-content">
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). </p>
                    <p className="about-content">
                    We have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.
                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so We converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <center>
                <div className="developer-info">
                    <h2 class="conb">Contributors</h2>
                    <h3 className="about-content"> Prachi Chaudhary</h3><img src="" alt="prachi"></img>
                    <h3 className="about-content"> Sanjana Brahmabhatt</h3><img src="" alt="sanjana"></img>
                </div>
                </center>
            </div>
        </div>
    )
}
