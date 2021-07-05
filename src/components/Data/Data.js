import React from "react";
import { ProgressBar } from "react-bootstrap";
import { skills } from "../../helpers/data";
import "./Data.scss";

const Data = () => {
	return (
		<div className="data d-flex flex-column">
			<table>
				<tbody>
					{skills.map((item) => (
						<tr key={item.name}>
							<td className="item_name">{item.name}</td>
							<td className="progress-wrapper">
								<ProgressBar min={0} max={100} now={item.skill} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Data;
