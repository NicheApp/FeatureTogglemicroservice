package com.annr.Toggle2.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.annr.Toggle2.request.Feature;
import com.annr.Toggle2.request.Rule;




@Service
public class ToggleRepository {
	
	public Map<String,List<FeatureFlagEntity>> featureToggleTable =new HashMap<>();
	
	public static final String FEATURE_1="F1";
	public static final String FEATURE_2="F2";
	public static final String FEATURE_3="F3";
	public static final String TENANT_1="T1";
	public static final String TENANT_2="T2";
	
	
	public static final String TENANT_KEY="tenant";
	public static final String APP_KEY="app";
	
	public void createOrUpdateFeature(Feature feature) { 

		List<FeatureFlagEntity> featureConfigEntries = new ArrayList<>();

		FeatureFlagEntity ffe =new FeatureFlagEntity();

		ffe.setFeatureName(feature.getFeatureName());

		ffe.setActive(feature.isActive());

		featureConfigEntries.add(ffe); 
		addRules(feature, featureConfigEntries);

		featureToggleTable.put(feature.getFeatureName(), featureConfigEntries);
		
	}
	
	private void addRules (Feature feature, List<FeatureFlagEntity> featureConfigEntries) {
		if(null!=feature.getRules()) {
	    for (Rule rule: feature.getRules()) {

	    	FeatureFlagEntity ffe= new FeatureFlagEntity(); 
	    	ffe.setFeatureName (feature.getFeatureName()); 
	    	ffe.setActive(rule.isActive()); 
	    	ffe.setCustomLabel(rule.getKey()); 
	    	ffe.setCustomLabelValue(rule.getValue()); 
	    	featureConfigEntries.add(ffe);
	    }
	    
		}
	}

	    	public void initializeFeatureTable() { 

	    		//Feature by default disabled 
	    		FeatureFlagEntity featurel =new FeatureFlagEntity();
	    		featurel.setFeatureName (FEATURE_1);
	    		featurel.setActive(false);

	    		//Only T1 tenant want F1

	    		FeatureFlagEntity featurel_tenant1= new FeatureFlagEntity(); 
	    		featurel_tenant1.setFeatureName (FEATURE_1); 
	    		featurel_tenant1.setCustomLabel(TENANT_KEY); 
	    		featurel_tenant1.setCustomLabelValue(TENANT_1); 
	    		featurel_tenant1.setActive(true);

	    	//One of the APP (A1) T1 don't want F1

	    	FeatureFlagEntity featurel_tenant1_app1 = new FeatureFlagEntity(); 
	    	featurel_tenant1_app1.setFeatureName (FEATURE_1); 
	    	featurel_tenant1_app1.setCustomLabel(TENANT_KEY+"-"+APP_KEY); 
	    	featurel_tenant1_app1.setCustomLabelValue(TENANT_1+".A1"); 
	    	featurel_tenant1_app1.setActive(false);

	    	//Feature2 by default enabled
                                          
	    	FeatureFlagEntity feature2= new FeatureFlagEntity(); 
	    	feature2. setFeatureName (FEATURE_2); 
	    	feature2.setActive(true);

	    	// T1 tenant don't want F2

	    	FeatureFlagEntity feature2_tenant1= new FeatureFlagEntity();
	    	feature2_tenant1. setFeatureName (FEATURE_2);
	    	feature2_tenant1.setCustomLabel(TENANT_KEY);
	    	feature2_tenant1.setCustomLabelValue(TENANT_1); 
	    	feature2_tenant1.setActive(false);

	    	//one of the app of  T1 want F2
	    
	    	FeatureFlagEntity feature2_tenant1_app1= new FeatureFlagEntity();
	    	feature2_tenant1_app1.setFeatureName (FEATURE_2); 
	    	
	    	feature2_tenant1_app1.setCustomLabel(TENANT_KEY+"-"+APP_KEY);
	    	feature2_tenant1_app1.setCustomLabelValue(TENANT_1+".A1");
	    	feature2_tenant1_app1.setActive(true);

	    	List<FeatureFlagEntity> featurelConfigEntries = new ArrayList<>();
	    	featurelConfigEntries.add(featurel);
            featurelConfigEntries.add(featurel_tenant1_app1);
	    	featurelConfigEntries.add(featurel_tenant1);

	    	List<FeatureFlagEntity> feature2ConfigEntries =new ArrayList<>(); 
	    	feature2ConfigEntries.add(feature2);
	    	feature2ConfigEntries.add(feature2_tenant1_app1);
	    	feature2ConfigEntries.add(feature2_tenant1);

	    	featureToggleTable.put(FEATURE_1, featurelConfigEntries); 
	    	featureToggleTable.put(FEATURE_2, feature2ConfigEntries);
	    	}
}