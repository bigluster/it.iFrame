/**
 * @creator Erik Wetterberg (ewg)
 * @modifier @owner Torben Seebach itelligence
 * @contributer Patrik Lundblad
 */

define( [], function () {

	return {
		type: "items",
		component: "accordion",
		items: {
			settings: {
				uses: "settings",
				items: {
				customProp2: {
						ref: "qDef.url",
						label: "URL",
						//component: "bo",
						type: "string",
						defaultValue: ""
					}					
				}
			}
		}
	};

} );
