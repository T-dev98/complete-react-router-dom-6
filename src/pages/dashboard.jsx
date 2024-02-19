const Dashboard = ({user}) => {
    return(
        <section className="section" >
            <h2>{user?.name}</h2>
        </section>
    )
}
export default Dashboard;