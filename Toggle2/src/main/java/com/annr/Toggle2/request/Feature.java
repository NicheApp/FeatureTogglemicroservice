package com.annr.Toggle2.request;

import java.util.List;

public class Feature {
	private String featureName;
	private boolean active;
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
