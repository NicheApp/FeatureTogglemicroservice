package com.annr.Toggle2.request;

import java.util.List;

public class Feature2 {
	private String featureName;
	private boolean active;
	private String projectname;
	
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	List<Rule> rules;
	public String getFeatureName() {
		return featureName;
	}
	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}
	public boolean isActive(){
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public List<Rule> getRules() {
		return rules;
	}
	public void setRules(List<Rule> rule) {
		this.rules = rule;
	}

}
