import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const ServiceMonitor = () => {
    const [services, setServices] = useState([]);
    const servers = ['Server1', 'Server2']; // Replace with your server names

    useEffect(() => {
        const fetchServices = async () => {
            const promises = servers.map(server =>
                axios.post('/service', {
                    command: 'Get-Service',
                    server,
                    service_name: 'Voxco'
                })
            );
            const results = await Promise.all(promises);
            setServices(results.map(result => result.data));
        };
        fetchServices();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Server</TableCell>
                        <TableCell>Service</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service, index) => (
                        <TableRow key={index}>
                            <TableCell>{servers[index]}</TableCell>
                            <TableCell>{service.name}</TableCell>
                            <TableCell>{service.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ServiceMonitor;
