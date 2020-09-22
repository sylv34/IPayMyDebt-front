import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateSession } from '../../redux/store/system/action'
import {SystemActionTypes, SystemState } from  '../../redux/store/system/type'

const mapState = (state: RootState) => ({
  session: state.system
})

const mapDispatch = {
  updateSession: (newSession: SystemState):SystemActionTypes => updateSession(newSession)
}

const connector = connect(mapState, mapDispatch)

type Props = ConnectedProps<typeof connector> & SystemActionTypes

const Home = (props: Props) => {
    
    useEffect(() => {
        let session: SystemState = {
           loggedIn: true,
           session: 'myToken',
           userId: 15
        }
        if (!props.session.loggedIn){
            props.updateSession(session)
        }
    })

    return (
        <div>Test</div>
    )
}

export default connector(Home)