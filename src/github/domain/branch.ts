export interface GitHubBranch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}

export type GitHubBranches = GitHubBranch[];
