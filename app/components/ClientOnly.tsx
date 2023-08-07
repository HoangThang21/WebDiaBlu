"use client"
import React, { useEffect, useState } from 'react';
import { hostname } from 'os';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
    const [hasMounted,setHasMounted] =useState(false);
    useEffect(()=>{
        setHasMounted(true);
    },[])
    if(!hasMounted){
        return null;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default ClientOnly;