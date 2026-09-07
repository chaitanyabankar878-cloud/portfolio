from flask import Flask, request, redirect, url_for, render_template
from database import get_connection

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    print("NAME:", name)
    print("EMAIL:", email)
    print("MESSAGE:", message)

    connection = get_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO messages (name, email, message)
        VALUES (%s, %s, %s)
    """

    values = (name, email, message)

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return """
    <h2>Message sent successfully! ✅</h2>
    <a href="/">Go back to portfolio</a>
"""



if __name__ == "__main__":
    app.run(debug=True)