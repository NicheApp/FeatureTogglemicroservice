package com.annr.Toggle2.request;

import java.util.List;

public class SearchCriteria {
	private String featureName;
	private List<CustomCriteria> customcriteria;

	
	public SearchCriteria(String featureName,List<CustomCriteria> customcriteria){
		this.featureName=featureName;
		this.customcriteria=customcriteria;
	}
	
	public String getFeatureName() {
		return featureName;
	}
	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}
	public List<CustomCriteria> getCustomcriteria() {
		return customcriteria;
	}
	public void setCustomcriteria(List<CustomCriteria> customcriteria) {
		this.customcriteria = customcriteria;
	}
	

}
