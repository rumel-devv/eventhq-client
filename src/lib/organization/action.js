'use server'

import { serverMutation } from "../api/server"

export const addOrganization = async (data) => {
    const resData = await serverMutation("/api/organizations",'POST',data)
    return resData
} 

export const updateOrg = async (data,id) => {
    const resData = await serverMutation(`/api/organizations/${id}`, 'PATCH',data)
    return resData
} 

