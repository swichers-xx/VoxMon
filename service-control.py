@app.route('/service', methods=['POST'])
def service_control():
    data = request.get_json()
    command = data.get('command')
    server = data.get('server')
    service_name = data.get('service_name')
    print(f'Command: {command}, Server: {server}, Service: {service_name}')
    return 'OK', 200
