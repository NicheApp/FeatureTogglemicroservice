package com.annr.Toggle2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.annr.Toggle2.data.FeatureFlagEntity;
import com.annr.Toggle2.data.ToggleRepository;
import com.annr.Toggle2.model.Togglemodel;
import com.annr.Toggle2.request.CustomCriteria;
import com.annr.Toggle2.request.SearchCriteria;

import java.util.*;

@Service
public class ToggleService {
	@Autowired
	private ToggleRepository toggleRepository;

	public static final String FEATURE_1 = "F1";
	public static final String FEATURE_2 = "F2";
	public static final String FEATURE_3 = "F3";
	public static final String TENANT_1 = "T1";
	public static final String TENANT_2 = "T2";
    public static final String TENANT_KEY = "tenant";
	public static final String APP_KEY = "app";

	public boolean toggle(SearchCriteria searchCriteria ,List<Togglemodel> featureConfig ) {
		/*toggleRepository.initializeFeatureTable();
		List<FeatureFlagEntity> featureConfig = toggleRepository.featureToggleTable
				.get(searchCriteria.getFeatureName());*/
		

		if (null != featureConfig) {

			Map<String, Boolean> effectiveConfig = new HashMap<>();

			for (Togglemodel ffe : featureConfig) {

				if (null == ffe.getCustomLabel() && null == ffe.getCustomLabelValue()) {
					effectiveConfig.put(ffe.getFeatureName(), ffe.isActive());
				}

				else {

					effectiveConfig.put(
			               
							ffe.getFeatureName() + "-" + ffe.getCustomLabel() + "#." + ffe.getCustomLabelValue(),
							ffe.isActive());
					System.out.println("Inside table "+ffe.getFeatureName() + "-" + ffe.getCustomLabel() + "#." + ffe.getCustomLabelValue());
				}
//f1-tenant#.tenant1
				
			}
			Comparator<CustomCriteria> compareByCustomLabel = (CustomCriteria ol, CustomCriteria o2) -> ol
					.getCustomLabel().compareTo(o2.getCustomLabel());
			Collections.sort(searchCriteria.getCustomcriteria(), compareByCustomLabel.reversed());

			int criteriaSize = searchCriteria.getCustomcriteria().size();

			while (criteriaSize >= 1) {

				StringBuilder keys = new StringBuilder();
				keys.append(searchCriteria.getFeatureName());
				StringBuilder values = new StringBuilder();
				values.append("#");

		
				
				for (int i = 0; i < criteriaSize; i++) {

					keys.append("-" + searchCriteria.getCustomcriteria().get(i).getCustomLabel());
					values.append("." + searchCriteria.getCustomcriteria().get(i).getCustomLabelValue());

				}
				keys.append(values);
				
				System.out.println("inside criteria"+keys.toString());

				if (null != effectiveConfig.get(keys.toString())) {
					return effectiveConfig.get(keys.toString());
				}

				criteriaSize--;
			}
			return effectiveConfig.get(searchCriteria.getFeatureName());
		}
		return false;
	}
}
