import React, { useState } from 'react'
import { api } from '../api/common'
import Loading from '../components/Loading'

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Component = (props: JSX.IntrinsicAttributes & P & { children?: React.ReactNode }) => {
        const [ loading, setLoading ] = useState(false)
        api.interceptors.request.use(
            config => {
                setLoading(true)
                return config
            },
            error => {
                setLoading(false)
                return error
            }
        )
        api.interceptors.response.use(
            response => {
                setLoading(false)
                return response
            },
            error => {
                setLoading(false)
                return error
            }
        )
        return (
            <>
                {loading && <Loading/>}
                <WrappedComponent {...props}/>
            </>
        )
    }
    return Component
}

export default withLoading