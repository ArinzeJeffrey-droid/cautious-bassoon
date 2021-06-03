import React, { useContext, useEffect, useState } from 'react';
import CardContentHeader from '../../components/card-content-header/CardContentHeader';
import Card from '../../components/card/Card';
import InfoHeader from '../../components/info-header/InfoHeader';
import SearchField from '../../components/input-fields/SearchField';
import SelectField from '../../components/input-fields/SelectField';
import Pagination from '../../components/pagination/Pagination';
import { StateContext } from '../../store';
import { fetchTemplates } from '../../actions/action';
import Loader from '../../components/loader/Loader';
import { handleQueries } from "../../utils/misc"




const HomePage = () => {
    const { state: { templates: { data, loading, num_of_results} }, dispatch } = useContext(StateContext)
    const [page, setPage] = useState(1)
    /** Component Did Mount */
    useEffect(() => {
        fetchTemplates(dispatch)
    },[dispatch])
    /** Search through templates records */
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value.replace("category-", ""))
    }
    /** Filter template records */
    const [filter, setFilter] = useState("")
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
    return (
        <div className="page-container">
            <div className="page-inner">
                <div className="input-header">
                    <SearchField handleSearch={handleSearch}/>
                    <div className="filter-container">
                        <div className="filter-inner">
                            <p>Sort by:</p>
                            <SelectField 
                                filterType="Category"
                                filterParams={["All", "Education", "E-commerce", "Health"]}
                                onChange={handleSearch}
                                name="category"
                            />
                            <SelectField
                                filterType="Order"
                                filterParams={["Default", "Ascending", "Descending"]}
                                onChange={handleFilter}
                                name="order"
                            />
                            <SelectField
                                filterType="Date"
                                filterParams={["Default", "Ascending", "Descending"]}
                                onChange={handleFilter}
                                name="date"
                            />
                        </div>
                    </div>
                </div>
            </div>
            { loading ? (<Loader/>) : (
                <React.Fragment>
                    <InfoHeader/>
                    <div className="card-content-container">
                        <CardContentHeader search={search} num_of_results={num_of_results}/>
                        <div className="card-container">
                            { handleQueries(data, search, filter)?.length === 0 ? (<Loader/>) : handleQueries(data, search, filter)[page-1]?.map((template, index) => (
                                <Card
                                    key={index*2}
                                    name={template.name}
                                    description={template.description}
                                    link={template.link}
                                />
                            ))}
                        </div>
                    </div>
                    <Pagination
                        goNext={() => setPage(page + 1)}
                        goPrev={() => setPage(page - 1)}
                        numberOfPages={Math.round(num_of_results / 15)}
                        currentPage={page}
                    />
                </React.Fragment>
            )}
        </div>
    );
}

export default HomePage;