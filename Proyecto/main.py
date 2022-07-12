from flask import Flask, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/codyCross')
def codyCross():
  return render_template('codyCross.html')

@app.route('/memoTest')
def memoTest():
  return render_template('memoTest.html')