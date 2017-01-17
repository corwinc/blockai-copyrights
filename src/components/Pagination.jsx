import React from 'react';

const Pagination = function() {
	return (
		<div>
			<div id='pagination-container'>pagination</div>
			<ul className="pagination">
				<li className="page-item">
				  <a className="page-link" href="#" aria-label="Previous">
				    <span aria-hidden="true">&laquo;</span>
				    <span className="sr-only">Previous</span>
				  </a>
				</li>
				<li className="active"><a className="page-link" href="#">1</a></li>
				<li className="page-item"><a className="page-link" href="#">2</a></li>
				<li className="page-item"><a className="page-link" href="#">3</a></li>
				<li className="page-item">
				  <a className="page-link" href="#" aria-label="Previous">
				    <span aria-hidden="true">&raquo;</span>
				    <span className="sr-only">Previous</span>
				  </a>
				</li>
			</ul>
		</div>
	);
}

export default Pagination;