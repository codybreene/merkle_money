import { connect } from 'react-redux';
import Dashboard from './dashboard'

const mapStateToProps = ({session}) => ({
    userId: session.id
})

export default connect(mapStateToProps, null)(Dashboard)