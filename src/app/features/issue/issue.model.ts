import {JiraIssue, JiraIssueReduced} from './providers/jira/jira-issue/jira-issue.model';
import {JiraCfg} from './providers/jira/jira.model';
import {GithubCfg} from './providers/github/github.model';
import {GithubIssue, GithubIssueReduced} from './providers/github/github-issue/github-issue.model';

export type IssueProviderKey = 'JIRA' | 'GITHUB';
export type IssueIntegrationCfg = JiraCfg | GithubCfg;

export enum IssueLocalState {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export interface IssueIntegrationCfgs {
  // should be the same as key IssueProviderKey
  JIRA?: JiraCfg;
  GITHUB?: GithubCfg;
}

export type IssueData = JiraIssue | GithubIssue;
export type IssueDataReduced = GithubIssueReduced | JiraIssueReduced;

export interface SearchResultItem {
  title: string;
  issueType: IssueProviderKey;
  issueData: IssueDataReduced;
  titleHighlighted?: string;
}
