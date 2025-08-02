import React from 'react';
import { useServices } from '../hooks/useServices';

function ServicesList() {
  const { data, isLoading, error } = useServices();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map(service => (
        <li key={service.id}>
          {service.description || 'No description'}
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;
