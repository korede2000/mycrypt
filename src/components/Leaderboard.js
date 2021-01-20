import React, { Component } from 'react'


export default class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.sortUsersByScore = this.sortUsersByScore.bind(this);
        this.sortUsersByName = this.sortUsersByName.bind(this);
        this.filterRank = this.filterRank.bind(this);
        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);

        this.state = {
            users: this.props.users,
            ranking: [],
            asc: false,
            alph: false,
            page: 1,
            pageMax: 1,
        };
    }

    componentDidMount() {
        const ranking = this.state.users;
        const paginate = this.props.paginate;
        ranking.sort(this.compareScore).reverse();
        ranking.map((user, index) => user.rank = index + 1);
        ranking.map((user, index) => user.page = Math.ceil((index + 1) / paginate));
        this.setState({ pageMax: ranking[ranking.length - 1].page })
        this.setState({ ranking: ranking });
    }
    
    compareScore(a, b) {
        if (a.score < b.score)
            return -1;
        if (a.score > b.score)
            return 1;
        return 0;
    }

    compareName(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    
    sortUsersByScore() {
        const ranking = this.state.ranking;
        const paginate = this.props.paginate;
        if (this.state.asc === true) {
            ranking.sort(this.compareScore).reverse();
            ranking.map((user, index) => user.page = Math.ceil((index + 1) / paginate));
            this.setState({ ranking: ranking });
            this.setState({ asc: false});
            this.setState({ alph: false});
        } else {
            ranking.sort(this.compareScore);
            ranking.map((user, index) => user.page = Math.ceil((index + 1) / paginate));
            this.setState({ ranking: ranking });
            this.setState({ asc: true });
            this.setState({ alph: false });
        }
    }

    sortUsersByName() {
        const ranking = this.state.ranking;
        const paginate = this.props.paginate;
        if(this.state.alph === true) {
            ranking.sort(this.compareName).reverse();
            ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
            this.setState({ ranking: ranking});
            this.setState({ alph: false});
            this.setState({ asc: true});
        } else {
            ranking.sort(this.compareName);
            ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
            this.setState({ ranking: ranking});
            this.setState({ alph: true});
            this.setState({ asc: true});
        }
    }

    filterRank(e) {
        const ranking = this.state.users;
        const paginate = this.props.paginate;
        const newRanking = [];
        const inputLength = e.target.value.length
        for(var i = 0; i < ranking.length; i++) {
            const str = ranking[i].name.slice(0, inputLength).toLowerCase();
            if(str === e.target.value.toLowerCase()) {
                newRanking.push(ranking[i]);
                newRanking.sort(this.compareScore).reverse();
                newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
                this.setState({ ranking: newRanking});
                this.setState({ page: 1});
                this.setState({ pageMax: newRanking[newRanking.length - 1].page})
            }
        }
        newRanking.sort(this.compareScore).reverse();
        newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
        this.setState({ ranking: newRanking});
        this.setState({ page: 1});
        
    }

    increasePage(e) {
        let page = this.state.page;
        if(page < this.state.pageMax){
            page += 1;
        }
        this.setState({ page: page});
    }

    decreasePage(e) {
        let page = this.state.page;
        if (page > 1) {
            page -= 1;
        }
        this.setState({ page: page });
    }

    


    render() {
        return (
                <div className='option-identity-wrapper' style={{padding:'0px'}}>
                <div class="card-header">
                    <h4 class="card-title">POOL LEADERBOARD</h4>
                </div>
                <div class="card-body">
                    <div className='transaction-table'>
                        <div className='table-responsive'>
                            <form onChange={this.filterRank}>
                                    Name: <input type="search" name="search" placeholder="Search"/>
                                </form>
                            <table className='table mb-0 table-responsive-sm' id='lBoard'>
                                <tbody>
                                    <tr style={{color:'white'}}>
                                        <td className='rank-header sortScore' onClick={ this.sortUsersByScore }> Rank </td>
                                        <td className='rank-header sortAlpha' onClick={ this.sortUsersByName }> Name </td>
                                        <td className='rank-header' onClick={this.sortUsersByScore}> Score </td>
                                        <td className='rank-header'onClick={this.sortUsersByScore}>Fees</td>
                                        <td className='rank-header'onClick={this.sortUsersByScore}>TOTAL VALUE</td>
                                        <td className='rank-header'onClick={this.sortUsersByScore}>TOTAL RETURN</td>
                                    </tr>
                                    {
                                        this.state.ranking.map((user, index) =>
                                            <tr className={`ranking ${user.page === this.state.page ? 'active-btn' : null}`} key={index}>
                                            { user.page === this.state.page ? <td className='data'>{ user.rank }</td> : null}
                                            { user.page === this.state.page ? <td className='data'>{ user.name }</td> : null }
                                            { user.page === this.state.page ? <td className='data'>{ user.score }</td> : null }
                                            { user.page === this.state.page ? <td className='data'>{ user.fees}</td> : null}
                                            { user.page === this.state.page ? <td className='data'>{ user.totalValue}</td> : null}
                                            { user.page === this.state.page ? <td className='data totalreturn'>{ user.totalReturn}</td> : null}
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div className='page'>
                                <p className='decrement' onClick={ this.decreasePage }>prev</p>
                                { this.state.page === 1 ? null: <p onClick={ this.decreasePage }> { this.state.page - 1 }</p>}
                                <p> { this.state.page }</p>
                                { this.state.page < this.state.pageMax ? <p onClick={ this.increasePage }> { this.state.page + 1 }</p>: null }
                                <p className='increment' onClick={ this.increasePage }>next</p>
                            </div>
                            
                        </div> 
                    </div>
                </div>   
            </div>
        )
    }
}

