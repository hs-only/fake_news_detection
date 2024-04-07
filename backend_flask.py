from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import sklearn
import itertools
import numpy as np
import seaborn as sb
import re
import nltk
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn import svm
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from nltk.stem.snowball import SnowballStemmer

import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)
loaded_model = pickle.load(open('random_forest_pipeline.pkl', 'rb'))
stop_words = set(stopwords.words('english'))
tfidf_v = TfidfVectorizer()
text_cleaning = r"\b0\S*|\b[^A-Za-z0-9\s]+"

def preprocess_filter(text, stem=False):
  text = re.sub(text_cleaning, " ",str(text.lower()).strip())
  tokens = []
  for token in text.split():
    if token not in stop_words:
      if stem:
        stemmer = SnowballStemmer(language='english')
        token = stemmer.stem(token)
      tokens.append(token)
  return " ".join(tokens)

def test_news(news):
    review = news
    input_data = [preprocess_filter(review)]
    prediction = loaded_model.predict(input_data)
    probab = loaded_model.predict_proba(input_data)[:,1]
    if prediction[0]==0:
      probab[0]=1.0-probab[0]
    return {"prediction": int(prediction[0]), "probab": float(probab[0])}


@app.route('/predict', methods=['POST'])
def predict():
  """
  Receives news content from the frontend, runs a test function, and returns the result.
  """
  if request.method == 'POST':
    try:
      data = request.get_json()
      news_content = data.get('newsContent')

      if not news_content:
        return jsonify({'error': 'Missing news content'}), 400

      # Replace this with your actual news processing logic (test_news function)
      result = test_news(news_content)

      return jsonify(result)
    except Exception as e:
      print(f"Error processing news: {e}")
      return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    app.run(debug=True)