export const DataItems = ({definitions, items}) => {
    return (
            <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center table-nowrap">
                    <thead>
                    <tr>
                        {definitions.map(def=>
                             <th scope="col" className="border-bottom">{def.title}</th>
                        )}
                        {/*<th scope="col" className="border-bottom">Action</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(item=>{
                          return (
                              <tr>
                                  {definitions.map(def=> {
                                      return <td scope="text-success" className="border-bottom">{item[def.value]}</td>
                                  })}
                                  {/*<td><a href="javascript:void(0)" className="text-primary">View <i className="uil uil-arrow-right" /></a></td>*/}
                              </tr>
                          )
                        })
                    }
                    </tbody>
                </table>
            </div>
    )
}
