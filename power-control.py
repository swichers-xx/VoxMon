from flask import Flask, request

app = Flask(__name__)

@app.route('/power', methods=['POST'])
def power_control():
    data = request.get_json()
    command = data.get('command')
    server = data.get('server')
    print(f'Command: {command}, Server: {server}')
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True)
