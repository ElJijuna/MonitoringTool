export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface Owner extends GitHubUser {
  repositories: {
    monitoringTool: string;
    database: string;
  };
}
