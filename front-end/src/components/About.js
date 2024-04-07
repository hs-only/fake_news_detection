import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="section">
                <h2>About Fake News Detector</h2>
                <p>
                    Our Fake News Detector model utilizes a Random Forest classifier, which has demonstrated excellent performance with a test accuracy of 96.82%.
                </p>
            </div>
            <div className="section">
                <h3>Model Details</h3>
                <ul>
                    <li><strong>Algorithm:</strong> Random Forest</li>
                    <li><strong>Test Accuracy:</strong> 96.82%</li>
                </ul>
            </div>
            <div className="section">
                <h3>Dataset Information</h3>
                <p>
                    The model was trained on a dataset consisting of labeled news articles, where each article was labeled as either "fake" or "true". The dataset was preprocessed to remove noise and irrelevant information before being used for training the model.
                </p>
            </div>
            <div className="section">
                <h3>Confusion Matrix</h3>
                <img alt='confusion matrix' src='https://github.com/hs-only/project-images/blob/main/confusion_matrix.png?raw=true' className='modelImage'/>
            </div>
            <div className="section">
                <h3>Learning Curve</h3>
                <img alt='Learning Curve' src='https://github.com/hs-only/project-images/blob/main/learning_curve.png?raw=true' className='modelImage'/>
                <p>
                    The learning curve depicts the performance of the model on both the training and validation sets as the size of the training data increases. It helps to understand how well the model generalizes to unseen data and whether additional training data would be beneficial.
                </p>
            </div>
            <div className="section">
                <h3>Precision Recall Curve</h3>
                <img alt='Precision Recall' src='https://github.com/hs-only/project-images/blob/main/precision_recalll.png?raw=true' className='modelImage'/>
            </div>
        </div>
    );
}

export default About;
