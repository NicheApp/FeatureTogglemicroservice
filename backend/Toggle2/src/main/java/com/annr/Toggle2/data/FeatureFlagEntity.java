package com.annr.Toggle2.data;

public class FeatureFlagEntity {
	
	private  String featureName;
	private String CustomLabel;
	private String CustomLabelValue;
	private boolean active;
	
	

	public String getFeatureName() {
		return featureName;
	}
	public void setFeatureName(String featureName) {
		this.featureName =featureName;
	}
	public String getCustomLabel() {
		return CustomLabel;
	}
	public void setCustomLabel(String customLabel) {
		CustomLabel = customLabel;
	}
	public String getCustomLabelValue() {
		return CustomLabelValue;
	}
	public void setCustomLabelValue(String customLabelValue) {
		CustomLabelValue = customLabelValue;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}

}
