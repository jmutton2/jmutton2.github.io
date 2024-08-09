type Endpoint = {
	id: number;
	created_at: string;
	configuration_id: number;
	url: URL;
}

type Configuration = {
	id: number;
	created_at: string;
	project_id: number;
	capture_frequency: number;
	endpoints: [Endpoint];
}

type Capture = {
	id: number;
	created_at: string;
	project_id: number;
	file_name: number;
	endpoint_id: number;
}
