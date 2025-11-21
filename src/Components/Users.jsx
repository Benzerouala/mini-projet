import React from 'react';

export const Users = ({ users = [], loading ,error }) => {
  if (loading) {
    return <p>Chargement en cours...</p>; 
  }
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
    {users.map((user) => (
      <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-title">{user.email}</h6>
        <p className="card-text"></p>
        </div>
            <div class="card-footer text-center">
            <a href="#" class="btn btn-primary">Détails</a>
        </div>
    </div>
       
))}
    </>

    
        

  );
};
